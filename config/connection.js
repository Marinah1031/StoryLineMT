// config/connection.js
const Sequelize = require('sequelize');

// Load environment variables from .env file
require('dotenv').config();

// Create a new Sequelize instance
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
    define: {
      underscored: true
    }
  }
);

// Test the database connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Database connection successful');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

module.exports = sequelize;
