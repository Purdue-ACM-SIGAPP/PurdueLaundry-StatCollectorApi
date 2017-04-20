var express = require('express');
var router = express.Router();
const Machine = require('../db/Machine');

/* GET users listing. */
router.get('/', function(req, res, next) {
  Machine.findAll()
  .then(machines => res.send(machines))
  .catch(err => res.send(err));
});

router.post('/', (req, res) => {
  const { name, dorm } = req.body;
  Machine.create(req.body)
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
