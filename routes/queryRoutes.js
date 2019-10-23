const express = require("express");
const router = express.Router();
const db = require("../helpers/queryDb");

/* GET home page. */
router.get("/", function(req, res) {
  db.get()
    .then(data => res.status(200).json(data))
    .catch(err =>
      res
        .status(500)
        .json({ message: "error getting data from first data source" })
    );
  // const data = db.getsecond();
  // console.log(data);
  // res.json({ message: "second" });
  // res.status(200).json(data);
});


router.get("/second", function(req, res) {
  db.getsecond()
    .then(data => res.status(200).json(data))
    .catch(err =>
      res
        .status(500)
        .json({ message: "error getting data from second data source" })
    );
  // const data = db.getsecond();
  // console.log(data);
  // res.json({ message: "second" });
  // res.status(200).json(data);
});

module.exports = router;
