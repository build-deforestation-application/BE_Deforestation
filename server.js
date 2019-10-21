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

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(helmet());
app.use(logger("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/query", query);
app.use("/auth", auth);

app.listen(port, function() {
  console.log("listening on port: ", port);
});
