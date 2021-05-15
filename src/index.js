const express = require('express');
const logger = require('morgan');
const dotenv = require('dotenv');

const healthcheckRoutes = require('./modules/healtcheck/healthcheck-routes');
const counterRoutes = require('./modules/counter/counter-routes');

dotenv.config();

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

healthcheckRoutes(app);
counterRoutes(app);

module.exports = app;
