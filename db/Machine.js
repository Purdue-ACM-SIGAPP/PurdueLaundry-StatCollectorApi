const Sequelize = require('sequelize');
const db = require('./index');

const Machine = db.define('Machine', {
  name: {
    type: Sequelize.STRING
  },
  dorm: {
    type: Sequelize.STRING
  }
});

module.exports = Machine;