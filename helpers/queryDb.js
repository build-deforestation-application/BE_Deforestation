const db = require("../db/knex");

module.exports = {
  get,
  getsecond
  // getById,
  // getByEmail,
  // insert,
  // update,
  // remove
};

function get() {
  console.log("here", db("ForestDatasetone"));
  return db("ForestDatasetone");
}
function getsecond() {
  console.log("here", db("ForestDatasettwo"));
  return db("ForestDatasettwo");
}
