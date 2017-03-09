var mysql = require('mysql');
 
function Db() {
  this.pool = null;
 
  this.init = function() {
    this.pool = mysql.createPool({
      connectionLimit: 10,
      host: 'localhost',
      user: 'root',
      password: 'dhanvi',
      database: 'oc23'
    });
  };
 
  this.acquire = function(callback) {
    this.pool.getConnection(function(err, db) {
      callback(err, db);
    });
  };
}
 
module.exports = new Db();
