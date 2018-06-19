const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const db = require('../database/index.js');

const port = process.env.PORT || 3002;

const app = express();

const options = {
  setHeaders: (res) => {
    res.set({ 'Access-Control-Allow-Origin': '*' });
  },
};

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/:id', express.static(path.join(__dirname, '/../public')));
app.use('/:id', express.static(path.join(__dirname, '/../client/dist'), options));

app.get('/:id/reviews', (req, res) => {
  db.getReviews(req.params.id, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).set({ 'Access-Control-Allow-Origin': '*' }).send(data);
    }
  });
});

app.listen(port, () => console.log(`listening on port ${port}`));
