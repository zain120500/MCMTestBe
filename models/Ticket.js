import { DataTypes } from 'sequelize';
import sequelize from '../src/config.js';

const Ticket = sequelize.define('Ticket', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    seatNumber: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    showtimeId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Showtimes', 
            key: 'id'
        },
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    }
}, {
    tableName: 'Tickets',
    timestamps: true
});


export default Ticket;
