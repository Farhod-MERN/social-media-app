const { Router } = require("express");
const mongoose = require("mongoose");
const User = mongoose.model("User");
const router = Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../keys/index");
const loginMiddleware = require("../middleware/login")


router.get("/", (req, res) => {
  res.send("Hello");
});

router.post("/signup", (req, res) => {
  const { name, email, password } = req.body;
  if (!email || !password || !name) {
    res.status(422).json({ error: "All fields is required" });
  }

  User.findOne({ email: email })
    .then((savedUser) => {
      if (savedUser) {
        return res
          .status(422)
          .json({ error: "User already exsist with that email" });
      }

      bcrypt.hash(password, 10).then((hashPass) => {
        const user = User.create({ name, password: hashPass, email });
      });
    })
    .then((user) => {
      res.json({ msg: "User is added successfully" });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/signin", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(422)
      .json({ error: "please enter both your email and password" });
  }

  User.findOne({ email: email })
    .then((savedUser) => {
      if (!savedUser) {
        res.status(422).json({ error: "User not found" });
      }
      bcrypt.compare(password, savedUser.password).then((isEqual) => {
        if (!isEqual) {
          return res.status(422).json({ error: "password is wrong" });
        } else {
          const token = jwt.sign({_id : savedUser._id}, JWT_SECRET, {expiresIn: "30d"})
          res.json({token: token});
        }
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/protected", loginMiddleware,(req, res)=>{
  res.send("Protected user")
})

module.exports = router;
