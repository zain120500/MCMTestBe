import sequelize from '../src/config.js';
import Film from './Film.js';
import Showtime from './Showtime.js';
import Studio from './Studio.js';
import Ticket from './Ticket.js';

const associateModels = () => {
    Film.hasMany(Showtime, { foreignKey: 'filmId' }); // Film memiliki banyak showtimes
    Showtime.belongsTo(Film, { foreignKey: 'filmId' }); // Showtime memiliki satu film
    Film.belongsTo(Studio, { foreignKey: 'studioId' }); // Film memiliki satu studio
    Ticket.belongsTo(Showtime, { foreignKey: 'showtimeId' }); // Ticket memiliki satu showtime

};

// Panggil fungsi asosiasi
associateModels();

export { sequelize, Film, Showtime, Studio,Ticket };
