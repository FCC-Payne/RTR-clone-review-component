const mysql = require('mysql');
const mysqlConfig = require('./config');

const connection = mysql.createConnection(mysqlConfig);

// load helper functions for database access into this folder

const getReviews = function() {
  connection.query('SELECT * FROM ((reviews INNER JOIN users ON reviews.user_id = users.user_id) INNER JOIN photos ON reviews.photos_id = photos.photos_id) WHERE dress_id = 1', (err, results, fields) => {
      if (err) {
        console.log('ERROR', err);
      } else {
        console.log('RESULTS', results);
        console.log('FIELDS', fields);
      }
  })
};

module.exports = {
  getReviews: getReviews,
};