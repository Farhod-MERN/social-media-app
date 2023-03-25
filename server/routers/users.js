const { Router } = require("express");
const mongoose = require("mongoose");
const User = mongoose.model("User");
const Post = mongoose.model("Post");
const router = Router();
const loginMiddleware = require("../middleware/login");

router.get("/user/:id", loginMiddleware, (req, res) => {
  User.findOne({ _id: req.params.id })
    .then((user) => {
      Post.find({ postedBy: req.params.id })
        .populate("postedBy", "_id name")
        .exec((err, posts) => {
          if (err) {
            return res.status(422).json({ error: err });
          }
          res.json({ user, posts });
        });
    })
    .catch((err) => {
      return res.status(404).json({ error: "User Not Found" });
    });
});

router.put("/follow", loginMiddleware, (req, res) => {
  //mongoose metodi 4 ta param oladi 3-opshins 4- callback
  User.findByIdAndUpdate(
    req.body.followId,
    {
      $push: { followers: req.user._id }, //follow bossam o'sha idli userni followersiga meni idimni qo'shadi
    },
    { new: true },
    (err, result) => {
      if (err) {
        return res.status(422).json({ error: err });
      }
      User.findByIdAndUpdate(req.user._id, {
        $push: { following: req.body.followId }, //meni followingimga esa uni idisini qo'shadi
      },{
        new: true
      }).select('-password')//userdan password bizga kerak emas, ortiqcha malumot kerak emas
        .then((result) => res.json(result))
        .catch((err) => {
            return res.status(422).json({error: err})
        });
    }
  );
});

router.put("/unfollow", loginMiddleware, (req, res) => {
  //mongoose metodi 4 ta param oladi 3-opshins 4- callback
  User.findByIdAndUpdate(
    req.body.unfollowId,
    {
      $pull: { followers: req.user._id }, //unfollow bossam o'sha idli userni followersidan meni olib tashlaydi
    },
    { new: true },
    (err, result) => {
      if (err) {
        return res.status(422).json({ error: err });
      }
      User.findByIdAndUpdate(req.user._id, {
        $pull: { following: req.body.unfollowId }, //meni followingimdan esa uni idisini o'chiradi
      })
        .then((result) => {
          return res.json(result)
        })
        .catch((err) => {
          return res.status(422).json(err);
        });
    }
  );
});

router.put("/updatepic",loginMiddleware, (req, res)=>{
  User.findByIdAndUpdate(req.user._id, {$set: {pic: req.body.pic}}, {
    new: true
  }, (err, result)=>{
    if(err){
      return res.status(422).json({error: "picture cann't uploaded"})
    }
    res.json(result)
  })
})

module.exports = router;
