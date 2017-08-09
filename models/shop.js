module.exports = function(sequelize, DataTypes) {
  var Shop = sequelize.define("Shop", {
    shopName: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    description:{
      type: DataTypes.STRING, 
      allowNull: true
    }

});


  Shop.associate = function(models) {
    Shop.hasMany(models.Item, {
      onDelete: "cascade"
    });
  };
  return Shop;
}
