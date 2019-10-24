const express = require("express");
const router = express.Router();
require("dotenv").config();

const jwt = require("jsonwebtoken");

//this verifies the oauth access token
// axios.get(`url`,
//{headers: { authorization: token }} <- pass in this object for every axios call as the second argument
//)

const restricted = function(req, res, next) {
  const token = req.headers.authorization;
  // console.log(token, "restricted route", req.cookies, "cookies");
  if (!token || token === null) {
    res.redirect(`/`);
  } else {
    jwt.verify(token, process.env.JWT_SECRET, function(err, decoded) {
      console.log(token, "in verify");
      console.log(err, decoded, "inside restricted decoder");
      if (err) {
        res.redirect("/");
      } else {
        req.email = decoded.email;
        req.userId = decoded.userId;
        if (req.userId) {
          next();
        } else {
          res.redirect("/");
        }
      }
    });
  }
};
module.exports = restricted;
