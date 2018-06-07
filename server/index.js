const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../database/index.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '/../public')));
app.use(express.static(path.join(__dirname, '/../client/dist')));

app.get('/reviews/*', (res, req) => {
  console.log('REQUEST BODY FROM SERVER', req.body);
  db.getReviews();
});

app.listen(3002);