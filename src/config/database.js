const mongoose = require('mongoose');

const {
  NODE_ENV,
  URL_MONGO_TEST,
  URL_MONGO_DEVELOPMENT,
  URL_MONGO_PRODUCTION,
} = process.env;

let mongoUrl = URL_MONGO_PRODUCTION;

const mongoUrls = {
  development: URL_MONGO_DEVELOPMENT,
  test: URL_MONGO_TEST,
};

if (NODE_ENV !== 'production') {
  mongoUrl = mongoUrls[NODE_ENV] || URL_MONGO_DEVELOPMENT;
}

mongoose.Promise = global.Promise;
mongoose.connect(mongoUrl, { useUnifiedTopology: true, useNewUrlParser: true });

module.exports = mongoose;
