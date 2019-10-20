const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
console.log("auth route");
router.get("/", (req, res) => {
  res.send("auth response from Deforestation");
});

module.exports = router;
