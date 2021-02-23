const dotenv = require("dotenv");
dotenv.config();
const mongodb = require("mongodb");
const queryString = `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/complexApp`;

mongodb.connect(queryString, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, client) {
  if (err) {
    console.log(err);
  }
  module.exports = client;
  const app = require("./app");
  app.listen(process.env.PORT);
});
