var db = require("../models");

module.exports = function(app) {
  app.get("/api/shops", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Shop.findAll({}).then(function(dbShop) {
      res.json(dbShop);
    });
  });

  app.get("/api/shops/:id", function(req, res) {

    db.Shop.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbShop) {
      res.json(dbShops);
    });
  });

  // app.get("/api/shops/:shopName", function(req, res) {

  //   db.Shop.findOne({
  //     where: {
  //       shopName: req.params.shopName
  //     }
  //   }).then(function(dbShop) {
  //     res.json(dbShops);
  //   });
  // });

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

