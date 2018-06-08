const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../database/index.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '/../public')));
app.use(express.static(path.join(__dirname, '/../client/dist')));

app.get('/reviews/1', (req, res) => {
  //TODO: look into sending the dress number along with the request body, and passing to the database to improve the query and make it more dynamic
  db.getReviews((err, data) => {
    if (err) {
      res.status(500).send('ERROR FETCHING FROM DATABASE', err);
    } else {
      res.status(200).send(JSON.stringify(data));
    }
  });
});

app.listen(3002);