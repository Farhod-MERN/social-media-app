const { Router } = require("express");
const mongoose = require("mongoose");
const login = require("../middleware/login");
const Post = mongoose.model("Post");

const router = Router();

router.get("/allpost", login, (req, res) => {
  Post.find()
    .populate("postedBy", "_id, name")
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
});
router.get("/mypost", login, (req, res) => {
  Post.find({ postedBy: req.user._id })
    .populate("postedBy", "_id, name")
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/createpost", login, (req, res) => {
  const { comment, photo } = req.body;

  if (!comment || !photo) {
    res.status(422).json({ error: "All fields are required" });
  }
  const post = Post.create({
    comment: comment,
    photo: photo,
    postedBy: req.user,
  })
    .then((result) => {
      res.json({ post: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.put("/like", login, (req, res) => {
  Post.findByIdAndUpdate(
    req.body.postId,
    {
      $push: { likes: req.user._id }, //modeldagi likesga user idsini push qildik, sintaksis put metodiniki
    },
    {
      new: true, //bu options: yangilashga ruhsat berdik
    }
  ).populate("postedBy").exec((err, result) => {
    if (err) {
      return res.status(422).json({ error: err });
    } else {
      res.json(result);
    }
  });
});
router.put("/unlike", login, (req, res) => {
  Post.findByIdAndUpdate(
    req.body.postId,
    {
      $pull: { likes: req.user._id }, //modeldagi likesga user idsini push qildik, sintaksis put metodiniki
    },
    {
      new: true, //bu options: yangilashga ruhsat berdik
    }
  ).populate("postedBy").exec((err, result) => {
    if (err) {
      return res.status(422).json({ error: err });
    } else {
      res.json(result);
    }
  });
});

// exec() - bu mongoose metodi hisoblanadi , va undan oldingi vazifalarni tekshiradi ekseqiud
module.exports = router;
