const express = require("express");

const server = express();

server.get("/", (req, res) => {
  res.send("server response from Deforestation");
});

module.exports = server;
