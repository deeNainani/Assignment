'use strict';

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Info = require('./model/Info');

var app = express();
var router = express.Router();

var port = process.env.API_PORT || 3001;

mongoose.connect('mongodb://invuser:adidps90@ds139899.mlab.com:39899/invapp');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Acess-Control-Allow-Credentials', 'true');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET,HEAD,OPTIONS,POST,PUT,DELETE'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Access-Control-Allow-Headers,Origin,Accespt,X-Requested-With,Content-Type,Access-Control-Request-Method,Access-Control-Request-Headers'
  );
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

router.get('/', function(req, res) {
  res.json({ message: 'API Initialized !' });
});

//adding the /Info route to our /api router
router
  .route('/Info')
  //retrieve all info from the database
  .get(function(req, res) {
    //looks at the Info schema
    Info.find(function(err, info) {
      if (err) res.send(err);
      //responds with a json object of our database info
      res.json(info);
    });
  })
  //post new info to the database
  .post(function(req, res) {
    var info = new Info();
    //body parser lets us use the req.body
    info.Name = req.body.Name;
    info.Email = req.body.Email;
    info.DueDate = req.body.DueDate;
    info.lineItemList = req.body.lineItemList;

    info.save(function(err) {
      if (err) res.send(err);
      res.json({ message: 'Info successfully added !' });
    });
  });

app.use('/api', router);

app.listen(port, function() {
  console.log(`api running on port ${port}`);
});
