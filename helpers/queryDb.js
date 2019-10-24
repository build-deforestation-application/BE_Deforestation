const db = require("../db/knex");

module.exports = {
  get,
  getById,
  // getByEmail,
  insert,
  update,
  remove
};

function get() {
  console.log("getting all", db("ForestDatasettwo"));
  return db("ForestDatasettwo");
}

function getById(id) {
  console.log(id, "inside getByid");
  return db("ForestDatasettwo").where("fid", id);
}

function insert(query) {
  console.log(query);
  return db("ForestDatasettwo").insert(query);
}

function update(data) {
  console.log(data, "in the helper");
  return db("ForestDatasettwo")
    .where("queryId", data.queryId)
    .update("Queries", data.queries);
}
function remove(queryId) {
  console.log(queryId, "helper");
  return db("ForestDatasettwo")
    .where("queryId", queryId.queryId)
    .del();
}
