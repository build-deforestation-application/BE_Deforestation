const environment = process.env.NODE_ENV || "development";
const config = require("../Deforestation/knexfile.js")[environment];
module.exports = require("knex")(config);
