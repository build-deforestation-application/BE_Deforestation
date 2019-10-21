require("dotenv").config();
const express = require("express");
const router = express.Router();
const db = require("../helpers/usersDb");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.get("/", async function(req, res, next) {
  const user = await db.get();
  res.status(200).json(user);
});

router.post("/register", async (req, res) => {
  let user = req.body;
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(user.password, salt);
  console.log(user);
  console.log(hash);

  const newUser = {
    userName: user.userName,
    email: user.email,
    password: hash
  };
  console.log(newUser);
  try {
    console.log("register try");
    const entree = await db.insert(newUser);
    console.log("after insert", entree);
    res.status(200).send(entree);
  } catch (error) {
    res.status(500).json({
      message: ("Server Error", error)
    });
  }
});

router.post("/login", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const user = await db.getByEmail(email)
  try {
    if (email && bcrypt.compareSync(password, user.password)) {
      const token = jwt.sign(
        {
          email: user.email,
          userId: user.userId
        },
        process.env.JWT_SECRET,
        { expiresIn: 60 * 240 }
      );
      res.status(200).json(token);
    } else {
      res.status(401).json({ message: "Authentication failed" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

module.exports = router;


