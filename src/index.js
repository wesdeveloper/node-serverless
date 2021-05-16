const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');

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

module.exports = app;
