'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Mengimpor model Studio secara dinamis
    const { default: Studio } = await import('../models/Studio.js');

    await Studio.bulkCreate([
      {
        name: 'Studio 1',
        location: 'Jakarta',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Studio 2',
        location: 'Bandung',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Studio 3',
        location: 'Surabaya',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Studios', null, {});
  },
};
