import express from 'express'
import sequelize from './config.js';
import { web } from "./aplication/web.js";
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());
app.use(web); 

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
    await sequelize.sync();
    console.log(`Server running on http://localhost:${PORT}`);
});
