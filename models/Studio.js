import { DataTypes } from 'sequelize';
import sequelize from '../src/config.js';

const Studio = sequelize.define('Studio', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: true,
});

export default Studio;
