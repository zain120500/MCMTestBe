import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('cinema_db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});


export default sequelize;
