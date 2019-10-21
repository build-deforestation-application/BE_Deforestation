const db = require("../db/knex");

module.exports = {
  get,
  getById,
  getByEmail,
  insert,
  update,
  remove
};

function get() {
  console.log("here", db("Users"));
  return db("Users");
}

function getById(userId) {
  return db("Users")
    .where({ userId })
    .first();
}

function getByEmail(email) {
  return db("Users")
    .where("email", email)
    .first();
}

function insert(user) {
  console.log("insert", user);
  return db("Users").insert(user);
}

function update(id, changes) {
  return db("Users")
    .where({ userId: id })
    .update(changes);
}

function remove(id) {
  return db("Users")
    .where("userId", id)
    .del();
}
