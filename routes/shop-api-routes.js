var db = require("../models");
var path = require('path');

module.exports = function(app) {
  app.get("/api/shops", function(req, res) {
    db.Shop.findAll({
      include: [db.Item]
    }).then(function(dbShop) {
      res.json(dbShop);
    });
  });

  app.get("/api/shops/:id", function(req, res) {
    db.Shop.findOne({
      where: {
        id: req.params.id
      }, 
      include: [db.Item]
    }).then(function(dbShop) {
      res.json(dbShop);
    });
  });

 app.get("/additem/:id", function(req, res) {
    db.Shop.findOne({
      where: {
        id: req.params.id
      }, 
      include: [db.Item]
    }).then(function(dbShop) {
      res.sendFile(path.join(__dirname, "../public/views/additem.html"), dbShop);
    });
  });


  app.post("/api/shops", function(req, res) {
    console.log(req.body);
    var idnum = 0;
    db.Shop.create(req.body).then(function(dbShop) {
      idnum = dbShop.dataValues.id;
    });
  })

  app.delete("/api/shops/:id", function(req, res) {
    db.Shop.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbShop) {
      res.json(dbShop);
    });
  });

};
