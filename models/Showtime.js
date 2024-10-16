import { DataTypes } from 'sequelize';
import sequelize from '../src/config.js';

const Showtime = sequelize.define('Showtime', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    time: {
        type: DataTypes.DATE,
        allowNull: false
    },
    filmId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Films', 
            key: 'id'
        },
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    }
}, {
    tableName: 'Showtimes',
    timestamps: true
});

export default Showtime;
