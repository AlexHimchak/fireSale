
var db = require("../models");

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

  app.post("/api/items", function(req, res) {
    console.log(req.body);
    db.Item.create(req.body).then(function(dbItem) {
      res.json(dbItem);
    });
  });

  app.put("/api/items", function(req, res) {
    db.Item.update(
      req.body,
      {
        where: {
          id: req.body.id
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