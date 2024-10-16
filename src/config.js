import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST, // Gunakan variabel lingkungan
    dialect: 'mysql',
    port: process.env.DB_PORT, // Port default MySQL
});

export default sequelize;
