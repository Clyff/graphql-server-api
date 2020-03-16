'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('registro', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      conta: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      saldo: {
        allowNull: false,
        type: Sequelize.INTEGER,
        default: 0
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('registro');
  }
};
