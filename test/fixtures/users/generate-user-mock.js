const Chance = require('chance');

const chance = new Chance();

const generateUserMock = () => ({
  name: chance.name(),
  lastName: chance.last(),
  email: chance.email(),
});

module.exports = generateUserMock;
