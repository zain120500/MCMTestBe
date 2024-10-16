import { DataTypes } from 'sequelize';
import sequelize from '../src/config.js';
import Studio from './Studio.js';

const Film = sequelize.define('Film', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    director: {
        type: DataTypes.STRING,
        allowNull: false
    },
    releaseDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    rating: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    studioId: {
        type: DataTypes.INTEGER,
        references: {
            model: Studio,
            key: 'id'
        },
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    }
}, {
    tableName: 'Films',
    timestamps: true
});

export default Film;
