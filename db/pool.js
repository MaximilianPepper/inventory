const { Pool } = require("pg");
require("dotenv").config();
// Add ENV variables
module.exports = new Pool({
  host: "localhost", // or wherever the db is hosted
  user: process.env.DB_USER,
  database: "musical_intruments", // i misstype the db name, rember to change
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});
