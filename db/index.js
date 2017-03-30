const pg = require('pg');

let config = {
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  max: 20,
  idleTimeoutMillis: 30000
};

const pool = new pg.Pool(config);

pool.on('error')
.then((err, client) => {
  console.error('idle client error', err.message, err.stack);
});

module.exports.query = function(text, values, callback) {
  return new Promise((resolve, reject) => {
    console.log('query: ', text, values);
    return pool.query(text, values, callback);
  })
}

module.exports.connect = function(callback) {
  return pool.connect(callback);
}