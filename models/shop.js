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
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    }
  });

  Shop.associate = function(models) {
    Shop.hasMany(models.Item, {
      onDelete: "cascade"
    });
  };
  return Shop;
}
