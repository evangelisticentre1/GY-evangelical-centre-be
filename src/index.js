/* eslint-disable import/extensions */
import dotenv from 'dotenv';
import app from './app.js';
import sequelize from './database/config/database.js';

dotenv.config();

const PORT = process.env.PORT || 3000;

const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('connected to database successfully');
  } catch (error) {
    console.log('unable to connect to database', error);
    console.log(error);
  }
};
connectToDatabase();

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
