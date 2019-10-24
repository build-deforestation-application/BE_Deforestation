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
