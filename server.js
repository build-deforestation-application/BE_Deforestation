require("dotenv").config();
const port = process.env.PORT || 8000;
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const cors = require("cors");
const logger = require("morgan");
const helmet = require("helmet");
const knex = require("./db/knex");

const auth = require("./routes/authRoutes");
const query = require("./routes/queryRoutes");

const server = express();

//  server.set("views", path.join(__dirname, "views"));
//  server.set("view engine", "ejs");

server.use(helmet());
server.use(logger("dev"));
server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

server.use("/query", query);
server.use("/auth", auth);

server.listen(port, function() {
  console.log("listening on port: ", port);
});
