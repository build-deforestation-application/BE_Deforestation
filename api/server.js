const express = require("express");
const server = express();
const helmet = require("helmet");
const morgan = require("morgan");
const auth = require("../routes/auth");

//Middleware
server.use(express.json());
server.use(helmet());
server.use(morgan("dev"));

// Routes
server.use("/auth", auth);

server.get("/", (req, res) => {
  res.send("server response from Deforestation");
});

module.exports = server;
