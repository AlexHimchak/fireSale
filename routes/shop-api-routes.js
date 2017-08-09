var db = require("../models");
var bucket = require("../config/storage.js");
var format = require('util').format;
var path = require("path");
var Multer = require("multer");
var multer =  Multer({
  storage: Multer.MemoryStorage,
  limits: {
    fileSize: 5 * 1024 * 1024 //No larger than 5 mb
  }
});


module.exports = function(app) {
  app.get("/api/shops", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Shop.findAll({
      include: [db.Item]
    }).then(function(dbShop) {
      res.json(dbShop);
    });
  });

  app.get("/api/shops/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Shop.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Item]
    }).then(function(dbShop) {
      res.sendFile(path.join(__dirname, '../public/views', 'myshop.html'), dbShop)
    });
  });

  app.post("/api/shops", function(req, res) {
    db.Shop.create({
      shopName: req.body.name,
      description: req.body.description
      }).then(function(dbShop) {
        db.Item.create({


        }).then(function(data){
          res.json(data);
        })
    });
  });

  app.delete("/api/shops/:id", function(req, res) {
    db.Shop.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbShop) {
      res.json(dbShop);
    });
  });

//This is to be merfed with the main POST method;
//currently this is for uploading to cloud storage and returns a url address for where it is located
app.post("/uploadimg", multer.single('image'), function(req, res, next){

  if (!req.file) {
    return next();
  }

  const blob = bucket.file(req.file.originalname);
  const blobStream = blob.createWriteStream();

  blobStream.on('error', (err) => {
    req.file.cloudStorageError = err;
    next(err);
  });

  blobStream.on('finish', () => {

   const publicUrl = format(`https://storage.googleapis.com/${bucket.name}/${blob.name}`);
    res.status(200).send(publicUrl);
    
    console.log(publicUrl);
    next();
  });

  blobStream.end(req.file.buffer);
}
)

//for mocha tests
var seed = function(){
      db.Shop.create({
      shopName: "test",
      description: "test"
      }).then(function(dbShop) {
        db.Item.create({
          itemTitle: "test",
          image : "REEE",
          price : 12.32,
          stock: 2

        }).then(function(data){
          res.json(data);
        })
    });
}
seed();

};
