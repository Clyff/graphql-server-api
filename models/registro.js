'use strict';
module.exports = (sequelize, DataTypes) => {
  const registros = sequelize.define('registro', {
    conta: DataTypes.INTEGER,
    saldo: DataTypes.INTEGER
  }, {
    freezeTableName: true,
    timestamps: false
  });
  registros.associate = function(models) {
    // associations can be defined here
  };
  return registros;
};
