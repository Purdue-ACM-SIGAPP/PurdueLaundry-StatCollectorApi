
var express = require('express');
var router = express.Router();
const MachineStateLog = require('../db/MachineStateLog');

/* GET users listing. */
router.get('/', function(req, res, next) {
  MachineStateLog.findAll()
  .then(machines => res.send(machines))
  .catch(err => res.send(err));
});

router.post('/', (req, res) => {
  const { name, dorm } = req.body;
  MachineStateLog.create(req.body)
  .then((machine) => {
    console.log(machine);
    res.send(machine);
  })
  .catch((err) => {
    console.error(err);
    res.send(err);
  })
});

module.exports = router;
