const { logger } = require('../../config');
const counterServices = require('./counter-services');

const increment = async (_, res) => {
  try {
    await counterServices.increment();
    return res.send();
  } catch (e) {
    logger.error('Counter controller increment error', e);
    return res.status(500).send();
  }
};

module.exports = {
  increment,
};
