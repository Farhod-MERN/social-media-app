const { Router } = require("express");
const mongoose = require("mongoose");
const login = require("../middleware/login");
const Post = mongoose.model("Post");

const router = Router();

router.get("/allpost" , (req, res)=>{
  Post.find().populate("postedBy", "_id, name").then(data =>{
    res.json(data)
  }).catch(err =>{
    console.log(err);
  })
})
router.get("/mypost", login, (req, res)=>{
  Post.find({postedBy: req.user._id}).populate("postedBy", "_id, name").then(data =>{
    res.json(data)
  }).catch(err =>{
    console.log(err);
  })
})

router.post("/createpost", login,(req, res) => {
  const { comment ,photo } = req.body;

  if (!comment || !photo) {
    res.status(422).json({ error: "All fields are required" });
  }
  const post = Post.create({ comment:comment, photo:photo, postedBy: req.user }).then(
    (result) => {res.json({post : result})}
  ).catch(err=>{
    console.log(err);
  })
});

module.exports = router;
