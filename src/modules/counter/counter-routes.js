const counterController = require('./counter-controller');

const healthcheckRoutes = (router) => {
  router.post('/counter', counterController.increment);
};

module.exports = healthcheckRoutes;
