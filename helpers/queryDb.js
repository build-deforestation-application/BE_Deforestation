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
  console.log(id, "inside getByid");
  return db("ForestDatasettwo").where("fid", id);
}

function insert(query) {
  console.log(query);
  return db("ForestDatasettwo").insert(query);
}


function remove() {}
