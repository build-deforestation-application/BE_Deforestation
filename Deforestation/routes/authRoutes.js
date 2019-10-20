require("dotenv").config();
const express = require("express");
const router = express.Router();
const knex = require("../db/knex");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.get("/", function(req, res, next) {
  res.send("Auth");
});

router.post("/register", async (req, res) => {
  let user = req.body;
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(user.password, salt);

  // check database for matching email address.
  if (await knex("Users").where("email", user.email)) {
    res.status(422).send("email address already used");
  }
  // check database for matching username
  if (await knex("Users").where("userName", user.userName)) {
    res.status(422).send("username  has already been used");
  }
  // object builder for new user
  const newUser = {
    userName: user.username,
    firstName: user.firstName,
    lastName: user.lastName,
    dataQuery: user.dataQuery,
    email: user.email,
    img: user.img,
    address: user.address,
    city: user.city,
    state: user.state,
    zipcode: user.zipcode,
    latitude: user.latitude,
    longitude: user.longitude,
    password: hash
  };
  try {
    await knex("User").insert(newUser);
    res.status(200).json(message("User has registered"));
  } catch (error) {
    res.status(500).json({
      message: "Server Error"
    });
  }
});

router.post("/login",async(req, res) => {
    const email = req.body.email
    const password = req.body.password
    const user = await knex("Users").where("email", user.email)
    try {
        if (email && bcrypt.compareSync(password, user.password)){
            const token = jwt.sign(
                {
                    email:user.email,
                    userId: user.userId
                },
                process.env.JWT_SECRET,
                { expiresIn: 60 * 240}
            );
                res.status(200).json(token)
        }else{
            res.status(401).json({message:"Authentication failed"})
        }

    }catch(error){
        res.status(500).json({message:"Server error",error})
    }
})

module.exports = router;

// return knex.schema.createTable("Users", table => {
//     table.increments("userId");
//     table.string("username").notNullable();
//     table.string("firstName");
//     table.string("lastName");
//     table.string("dataquery");
//     table
//       .string("email")
//       .unique()
//       .notNullable();
//     table.string("img");
//     table.string("address");
//     table.string("city");
//     table.string("state");
//     table.string("zipcode");
//     table.string("latitude");
//     table.string("longitude");
//     table.integer("stripe_user_id");
//     table.string("passwordtoken");
//   });
