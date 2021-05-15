const counterController = require('./counter-controller');

const healthcheckRoutes = (router) => {
  router
    .post('/counter', counterController.increment)
    .get('/counter', counterController.getAmount);
};

module.exports = healthcheckRoutes;
