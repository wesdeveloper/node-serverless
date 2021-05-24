const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
require('express-async-errors');

const { logger } = require('./config');
const healthcheckRoutes = require('./modules/healtcheck/healthcheck-routes');
const counterRoutes = require('./modules/counter/counter-routes');
const usersRoutes = require('./modules/users/users-routes');

dotenv.config();

const app = express();
require('./config/database');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

healthcheckRoutes(app);
counterRoutes(app);
usersRoutes(app);

// error handler middleware
app.use((error, _, res, next) => {
  logger.info(error.stack);
  return res.status(500).send('Something Broke!');
});

module.exports = app;
