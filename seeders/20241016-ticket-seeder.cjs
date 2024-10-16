'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Tickets', [
      {
        seatNumber: 'A1',
        price: 100000,
        showtimeId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        seatNumber: 'A2',
        price: 100000,
        showtimeId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        seatNumber: 'B1',
        price: 120000,
        showtimeId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        seatNumber: 'B2',
        price: 120000,
        showtimeId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        seatNumber: 'C1',
        price: 150000,
        showtimeId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        seatNumber: 'C2',
        price: 150000,
        showtimeId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Tickets', null, {});
  }
};
