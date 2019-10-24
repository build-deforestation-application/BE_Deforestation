const express = require("express");
const router = express.Router();
const db = require("../helpers/queryDb");
const restricted = require("../restricted");

router.get("/", restricted, function(req, res) {
  const id = req.userId;
  db.getById(id)
    .then(data => res.status(200).json(data))
    .catch(err =>
      res
        .status(500)
        .json({ message: "error getting data from first data source" })
    );
});

router.post("/", restricted, function(req, res) {
  data = req.body;
  data.fid = req.userId;
  db.insert(data)
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json({ message: "Server error" }));
});

router.put("/", restricted, function(req, res) {
  data = req.body;

  console.log(data, "inside put endpoint");

  db.update(data)
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json({ message: "Server error" }));
});

router.delete("/", restricted, function(req, res) {
  console.log(req.body,"here it is");
  data = req.body
  db.remove(data)
    .then(data => res.status(200).json({ message: "Query has been removed" }))
    .catch(err =>
      res.status(500).json({ message: "delete failed server error" })
    );
});


module.exports = router;
