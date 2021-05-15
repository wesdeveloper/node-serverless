const axios = require('axios');

const {
  COUNT_API_HOST,
  COUNT_API_NAMESPACE,
  COUNT_API_KEY,
} = process.env;

const increment = async () => {
  const countApiIncrementRoute = `${COUNT_API_HOST}/hit/${COUNT_API_NAMESPACE}/${COUNT_API_KEY}`;
  return axios.get(countApiIncrementRoute);
};

const getAmount = async () => {
  const countApiGetAmountRoute = `${COUNT_API_HOST}/get/${COUNT_API_NAMESPACE}/${COUNT_API_KEY}`;
  return axios
    .get(countApiGetAmountRoute)
    .then(response => response.data);
};

module.exports = {
  increment,
  getAmount,
};
