const Machine = require('../db/Machine');
const MachineStateLog = require('../db/MachineStateLog');

Machine.sync({force: true}).then(() => {
  console.log('Machine Table created');
});

MachineStateLog.sync({force: true}).then(() => {
  console.log('MachineStateLog Table created');
});