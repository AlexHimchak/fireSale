var db = require("../models");

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
      }
    }).then(function(dbShop) {
      res.json(dbShop);
    });
  });


  app.post("/api/shops", function(req, res) {
    console.log(req.body);
    db.Shop.create(req.body).then(function(dbShop) {
      res.json(dbShop);
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

};

