const db = require("../db/knex");

module.exports = {
  get,
  getById,
  // getByEmail,
  insert,
  // update,
  remove
};

function get() {
  console.log("getting all", db("ForestDatasettwo"));
  return db("ForestDatasettwo");
}

function getById(id) {
  id = id.queryId
  console.log(id, "inside getByid");
  return db("ForestDatasettwo").where("queryId", id);
}

function insert(query) {
  console.log(query);
  return db("ForestDatasettwo").insert(query);
}
function remove() {}
