const db = require("../db/knex");

module.exports = {
  get
  // getById,
  // // getByEmail,
  // insert,
  // update,
  // remove
};

function get() {
  console.log("getting all", db("ForestDatasetone"));
  return db("ForestDatasetone");
}
