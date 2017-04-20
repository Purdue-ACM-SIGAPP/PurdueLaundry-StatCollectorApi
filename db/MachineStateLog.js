const Sequelize = require('sequelize');
const db = require('./index');

const MachineStateLog = db.define('MachineStateLog', {
  name: {
    type: Sequelize.STRING
  },
  dorm: {
    type: Sequelize.STRING
  },
  starttime: {
    type: Sequelize.DATE
  },
  timeleft: {
    type: Sequelize.DOUBLE
  },
  state: {
    type: Sequelize.ENUM('Empty', 'In Progress', 'Finished')
  }
});

module.exports = MachineStateLog;