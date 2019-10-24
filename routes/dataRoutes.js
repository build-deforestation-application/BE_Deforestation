const express = require("express");
const router = express.Router();
const db = require("../helpers/dataDb");

router.get("/", function(req, res) {
  db.get()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err =>
      res
        .status(500)
        .json({ message: "error getting data from first data source" })
    );
});

module.exports = router;
//exports.seed = function(knex) {
  // Deletes ALL existing entries
//   return knex('ForestDatasetone').del()
//     .then(function () {
//       // Inserts seed entries
//       return knex('ForestDatasetone').insert(arr);
//     });
// };