// Initial Config
const path = require('path');
const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const app = express();

// Database
require("./models/config");

// Routes
//const Route = require('./routes/route');

// Middleware

app.use(bodyParser.json());
app.use(express.json());
app.use(express.static('public'));
// app.use(Route);

// Handle Errors 404
app.use((req, res, next) => {
  res.status(404).send('No route find');
});

// Handle Errors 500
app.use((err, req, res, next) => {
  if (err.name === "ValidationError") {
    res.status(422).json({ errors: err.errors });  
  } else {
    console.log(err);
    res.status(500).json({ error: err.message  });
  }
});

module.exports = app;
