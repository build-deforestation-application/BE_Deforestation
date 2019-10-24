const express = require("express");
const router = express.Router();
const db = require("../helpers/queryDb");
const restricted = require("../restricted");

// this route obtains what it needs from the token
//nothing but token is required to be sent

//https://be-deforestation.herokuapp.com/query/

// the token needs to be passed in the header as
// {authorization: token}

router.get("/", restricted, function(req, res) {
  const id = req.userId;
  db.getById(id)
    .then(data => {
      res.status(200).json(data)})
    .catch(err =>
      res
        .status(500)
        .json({ message: "error getting data from first data source" })
    );
});

//https://be-deforestation.herokuapp.com/query/
// the token needs to be passed in the header as
// {authorization: token}
// in the body     {"queries": "how"}

router.post("/", restricted, function(req, res) {
  data = req.body;
  data.fid = req.userId;
  db.insert(data)
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json({ message: "Server error" }));
});

//https://be-deforestation.herokuapp.com/query/
// the token needs to be passed in the header as
// {authorization: token}
// in the body pass an object   {
//   	"queryId":5,
//     "queries": "nowhow"
// }

router.put("/", restricted, function(req, res) {
  data = req.body;

  console.log(data, "inside put endpoint");

  db.update(data)
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json({ message: "Server error" }));
});

// //https://be-deforestation.herokuapp.com/query/
// the token needs to be passed in the header as
// {authorization: token}
// in the body pass an 	"queryId":5"

router.delete("/", restricted, function(req, res) {
  console.log(req.body, "here it is");
  data = req.body;
  db.remove(data)
    .then(data => res.status(200).json({ message: "Query has been removed" }))
    .catch(err =>
      res.status(500).json({ message: "delete failed server error" })
    );
});

module.exports = router;
