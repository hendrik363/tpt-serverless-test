'use strict';

const serverless = require('serverless-http');
const express = require('express')
const path = require('path');
const app = express()

app.use(function (req, res, next) {
  console.log(req);
//  console.log('Time:', Date.now())
 next()
})

app.use(express.static(path.join(__dirname, "client", "./build")));

module.exports.handler = serverless(app);