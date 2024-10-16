'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { default: Film } = await import('../models/Film.js');
    const { default: Showtime } = await import('../models/Showtime.js');

    const films = await Film.findAll();
    
    if (films.length === 0) {
      throw new Error('No films found. You need to seed Films before seeding Showtimes.');
    }

    const selectedFilm = films[0];

    await Showtime.bulkCreate([
      {
        time: new Date(), 
        filmId: selectedFilm.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        time: new Date('2024-10-16T13:00:00Z'), 
        filmId: selectedFilm.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        time: new Date('2024-10-17T16:00:00Z'), 
        filmId: selectedFilm.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    const { default: Showtime } = await import('../models/Showtime.js');

    await queryInterface.bulkDelete('Showtimes', null, {});
  }
};
