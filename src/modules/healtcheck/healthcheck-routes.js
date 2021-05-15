const healthcheckController = require('./healthcheck-controller');

const healthcheckRoutes = (router) => {
  router.get('/healthcheck', healthcheckController.isHealthcheck);
};

module.exports = healthcheckRoutes;
