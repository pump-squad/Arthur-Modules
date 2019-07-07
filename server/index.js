const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const dbHelpers = require('./dbHelper.js');

const port = 4000;
// console.log('dbHelpers ', dbHelpers)

//install middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './client/dist/')))

//use api routes

// when i get an id
app.get('/reviews/ids/:id', (req, res) => {
  var { id } = req.params;
  dbHelpers.getReviews(id, req.body.gender, (err, data) => {
    if (err) {
      res.status(400).send('getId Failed ', err);
    } else {
      res.status(200).send(data);
    }
  })
})

//when i get a product word
app.get('/reviews/product', (req, res) => {

  dbHelpers.getReviews(req.body.name, req.body.gender, (err, data) => {
    if (err){
      res.status(400).send('get Product Failed ', err);
    } else {
      res.status(200).send(data);
    }
  })
})

app.listen(port, () => console.log(`App is listening to port ${port}`));