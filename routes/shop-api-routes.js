var db = require("../models");

module.exports = function(app) {
  app.get("/api/shop", function(req, res) {
    db.Shop.findAll({
      include: [db.Item]
    }).then(function(dbShop) {
      res.json(dbShop);
    });
  });

  app.get("/api/shop/:id", function(req, res) {
    db.Shop.findOne({
      include: [db.Item],
      where: {
        id: req.params.id
      }
    }).then(function(dbShop) {
      res.json(dbShop);
    });
  });

  app.post("/api/shop", function(req, res) {
    db.Shop.create(req.body).then(function(dbShop) {
      res.json(dbShop);
    });
  });

  app.delete("/api/shop/:id", function(req, res) {
    db.Shop.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbShop) {
      res.json(dbShop);
    });
  });

};
