require('dotenv').config();
const Sequelize = require('sequelize');

const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'postgres',
});

db.authenticate()
  .then(function (err) {
    console.log('DB connected');
  })
  .catch(function (err) {
    console.error(err);
  });

module.exports = db;
