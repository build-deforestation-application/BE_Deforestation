const environment = process.env.NODE_ENV || "development";
const config = require("../../knexfile.js/index.js")[environment];
module.exports = require("knex")(config);
