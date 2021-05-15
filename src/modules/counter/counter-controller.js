const { logger } = require('../../config');
const counterServices = require('./counter-services');

const increment = async (_, res) => {
  try {
    await counterServices.increment();
    return res.status(201).send();
  } catch (e) {
    logger.error('counter controller - increment error:', e);
    return res.status(500).send();
  }
};

const getAmount = async (_, res) => {
  try {
    const { value } = await counterServices.getAmount();
    return res.send({ amount: value });
  } catch (e) {
    logger.error('counter controller - getAmount error:', e);
    return res.status(500).send();
  }
};

module.exports = {
  increment,
  getAmount,
};
