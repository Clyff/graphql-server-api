'use strict';
module.exports = (sequelize, DataTypes) => {
  const carteiras = sequelize.define('carteira', {
    conta: DataTypes.INTEGER,
    saldo: DataTypes.INTEGER
  }, {
    freezeTableName: true,
    timestamps: false
  });
  carteiras.associate = function(models) {
    // associations can be defined here
  };
  return carteiras;
};
