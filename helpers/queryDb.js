const db = require("../db/knex");

module.exports = {
  get
  // getById,
  // getByEmail,
  // insert,
  // update,
  // remove
};

function get() {
  console.log("here", db('Forest_dataset_1'));
  return db('Forest_dataset_1');
}
