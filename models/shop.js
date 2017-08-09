module.exports = function(sequelize, DataTypes) {
  var Shop = sequelize.define("Shop", {
    shopName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    shopDescription: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Shop.associate = function(models) {
    Shop.hasMany(models.Item, {
      onDelete: "cascade"
    });
  };
  return Shop;
}
