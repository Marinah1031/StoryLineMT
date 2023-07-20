// config/connection.js
const Sequelize = require('sequelize');

// Load environment variables from .env file
require('dotenv').config();

// Create a new Sequelize instance
let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306,
    },
  );
}

// Test the database connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Database');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

module.exports = sequelize;
