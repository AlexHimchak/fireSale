module.exports = function(sequelize, DataTypes) {
  var Shop = sequelize.define("Shop", {
    shopName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
<<<<<<< HEAD

    description:{
      type: DataTypes.STRING, 
      allowNull: true
    },

    item: {
      type:DataTypes.STRING,
      allowNull: false
        description: {
          type:DataTypes.STRING,
          allowNull: true
        },
        price: {
          type: DataTypes.Decimal,
          allowNull: false
        },
        stock: {
          type: DataTypes.INTEGER,
          allowNull: false
        }
=======
    shopDescription: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    item: {
      type:DataTypes.STRING,
      allowNull: false
      image: {
        type: DataTypes.STRING,
        default: "http://via.placeholder.com/350x350"
        allowNull: false
      }
      price: {
        type: DataTypes.Decimal,
        allowNull: false
      }
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
>>>>>>> b1e83834c10f1d57fe802b7331547282a5deb677
    }

  });

  //   Shop.associate = function(models) {
  //   Shop.hasMany(models.Item, {
  //     onDelete: "cascade"
  //   });
  // };


  return Shop;
};
