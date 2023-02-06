const { MongoClient } = require("mongodb");
require("dotenv").config();
const URI = process.env.MONGODB_URL;

const client = new MongoClient(URI);

client
  .connect()
  .then(() => {
    console.log("DB Connection Successful");
  })
  .catch((e) => {
    console.log(e.message);
  });

module.exports = client;
