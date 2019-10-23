const express = require("express");
const router = express.Router();
const knex = require("../db/knex");
const db = require("../helpers/queryDb");

/* GET home page. */
router.get("/", async function(req, res, next) {
  const data = await db.get();
  res.status(200).json(data);
});

module.exports = router;
