'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('registro', [{
      conta: 1515,
      saldo: 500
    },{
      conta: 2323,
      saldo: 1500
    },{
      conta: 5050,
      saldo: 3000
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op
      return queryInterface.bulkDelete('registro', null, {});
  }
};
