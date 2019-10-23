const express = require("express");
const router = express.Router();
const knex = require("../db/knex");
const db = require("../helpers/queryDb");

/* GET home page. */
router.get("/", function(req, res, next) {
  const data = db.get();
  res.status(200).json(data);
});

router.get("/second", function(req, res) {
  const data = db.getsecond();
  res.status(200).json(data);
});

module.exports = router;
