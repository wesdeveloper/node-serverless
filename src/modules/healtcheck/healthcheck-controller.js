const isHealthcheck = async (_, res) => res.send({ message: 'It`s ok' });

module.exports = {
  isHealthcheck,
};
