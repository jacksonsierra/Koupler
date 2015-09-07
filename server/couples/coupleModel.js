var dbConnection = require('../db/index.js');

var queryDb = function(queryString, params, callback) {
  dbConnection.query(queryString, params, function(err, results) {
    if(err) {
      console.error('Database Error: ' + err);
    }

    callback(results);
  });
};

module.exports = {
  
  postCouple: function(params, callback) {
    var queryString = 'INSERT INTO couples (person_1_last_name, person_1_first_name, person_2_last_name, person_2_first_name, username, hash, email, phone, photo_filepath) VALUES (?, ?, ?, ?, ?, ?, ?, ?);';
    queryDb(queryString, params, callback);
  }

  , selectCouple: function(params, callback) {
    var queryString = 'SELECT username, hash FROM couples WHERE username = ?;';
    queryDb(queryString, params, callback);
  }
};