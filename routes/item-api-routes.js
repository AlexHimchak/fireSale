
var db = require("../models");
var bucket = require("../config/storage.js");
var format = require('util').format;
const Multer = require('multer');
const multer = Multer({
  storage: Multer.MemoryStorage,
  limits: {
    fileSize: 5 * 1024 * 1024 //No larger than 5 mb
  }
});

module.exports = function(app) {
  app.get("/api/items", function(req, res) {
    var query = {};
    if (req.query.shop_id) {
      query.ShopId = req.query.shop_id;
    }
    db.Item.findAll({
      where: query,
      include: [db.Shop]
    }).then(function(dbItem) {
      res.json(dbItem);
    });
  });

  app.post("/api/items", multer.single('image'), function(req, res, next){
    if (!req.file) {return next();}
    const blob = bucket.file(req.file.originalname);
    const blobStream = blob.createWriteStream();
      blobStream.on('error', (err) => {
      req.file.cloudStorageError = err;
      next(err);
    });
    blobStream.on('finish', () => {
    const publicUrl = format(`https://storage.googleapis.com/${bucket.name}/${blob.name}`);
      res.redirect("back");
      console.log(publicUrl);
      console.log(req.body)
        db.Item.create({
          itemTitle: req.body.itemName,
          image: publicUrl,
          price: req.body.price,
          stock: req.body.Inventory,
          ShopId: req.body.identity
        })
      next();
    });

  blobStream.end(req.file.buffer);
  })

  function next(){
    console.log("hi")};


  app.put("/api/items", function(req, res) {
    db.Item.update(
      req.body,
      {
        where: {
          ShopId: req.body.id
        }
      }).then(function(dbItem) {
        res.json(dbItem);
      }
    );
  });

  app.delete("/api/items/:id", function(req, res) {
    db.Item.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbItem) {
      res.json(dbItem);
    });
  });
};