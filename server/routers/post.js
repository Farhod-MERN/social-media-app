const { Router } = require("express");
const mongoose = require("mongoose");
const login = require("../middleware/login");
const Post = mongoose.model("Post");

const router = Router();

router.post("/createpost", login, (req, res) => {
  const { title, body } = req.body;

  if (!title || !body) {
    res.status(422).json({ error: "All fields are required" });
  }
  const post = Post.create({ title, body, postedBy: req.user }).then(
    (result) => {res.json({post : result})}
  ).catch(err=>{
    console.log(err);
  })
});

module.exports = router;
