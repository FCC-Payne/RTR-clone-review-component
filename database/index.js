const mysql = require('mysql');
const mysqlConfig = require('./config');

const connection = mysql.createConnection(mysqlConfig);

// load helper functions for database access into this folder

const getReviews = function() {

};

module.exports = {
  getReviews: getReviews,
};