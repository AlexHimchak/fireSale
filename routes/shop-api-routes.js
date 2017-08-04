var db = require("../models");

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
      res.json(dbShops);
    });
  });

  app.post("/api/shops", function(req, res) {
    db.Shop.create(req.body).then(function(dbAuthor) {
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

