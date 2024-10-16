'use strict';

const films = [
  {
    title: 'The Shawshank Redemption',
    director: 'Frank Darabont',
    releaseDate: new Date('1994-09-23'),
    rating: 9.3,
    studioId: 1, 
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'The Godfather',
    director: 'Francis Ford Coppola',
    releaseDate: new Date('1972-03-24'),
    rating: 9.2,
    studioId: 1, 
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'The Dark Knight',
    director: 'Christopher Nolan',
    releaseDate: new Date('2008-07-18'),
    rating: 9.0,
    studioId: 2, 
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'Pulp Fiction',
    director: 'Quentin Tarantino',
    releaseDate: new Date('1994-10-14'),
    rating: 8.9,
    studioId: 3, 
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'Forrest Gump',
    director: 'Robert Zemeckis',
    releaseDate: new Date('1994-07-06'),
    rating: 8.8,
    studioId: 3, 
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Films', films, {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Films', null, {});
  }
};
