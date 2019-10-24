const express = require("express");
const router = express.Router();
const db = require("../helpers/queryDb");
const restricted = require("../restricted");

/* GET home page. */
// router.get("/", function(req, res) {
//   db.get()
//     .then(data => res.status(200).json(data))
//     .catch(err =>
//       res
//         .status(500)
//         .json({ message: "error getting data from first data source" })
//     );
// });

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
  console.log(req.userId);
  console.log(req.body);
  data = req.body;
  data.fid = req.userId;

  console.log(data, "here is data");
  db.insert(data)
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json({ message: "Server error" }));
});
// , restricted,
// router.get("/second", function(req, res) {
//   db.getsecond()
//     .then(data => res.status(200).json(data))
//     .catch(err =>
//       res
//         .status(500)
//         .json({ message: "error getting data from second data source" })
//     );
// const data = db.getsecond();
// console.log(data);
// res.json({ message: "second" });
// res.status(200).json(data);

module.exports = router;
