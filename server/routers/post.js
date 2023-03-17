const { Router } = require("express");
const mongoose = require("mongoose");
const login = require("../middleware/login");
const Post = mongoose.model("Post");

const router = Router();

router.get("/allpost", login, (req, res) => {
  Post.find()
    .populate("postedBy")
    .populate("comments.postedBy", "name _id")
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
  )
    .populate("postedBy")
    .populate("comments.postedBy", "name _id")
    .exec((err, result) => {
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
  )
    .populate("postedBy")
    .populate("comments.postedBy", "name _id")
    .exec((err, result) => {
      if (err) {
        return res.status(422).json({ error: err });
      } else {
        res.json(result);
      }
    });
});

router.put("/comments", login, (req, res) => {
  const comment = {
    text: req.body.text,
    postedBy: req.user._id,
  };
  Post.findByIdAndUpdate(
    req.body.postedBy,
    {
      $push: {
        comments: comment,
      },
    },
    {
      new: true,
    }
  )
    .populate("comments.postedBy", "name _id")
    .populate("postedBy")
    .exec((err, result) => {
      if (err) {
        return res.status(422).json({ error: err });
      } else {
        // console.log(result);
        return res.json(result);
      }
    });
});
// exec() - bu mongoose metodi hisoblanadi , va undan oldingi vazifalarni tekshiradi ekseqiud

router.delete("/deletepost/:postId", login , (req, res) => {
  Post.findOne({ _id: req.params.postId })
  .populate("comments.postedBy", "name _id")
  .populate("postedBy")
    .exec((err, post) => {
      if (err || !post) {
        return res.status(422).json({ error: err });
      }
      if (post.postedBy._id.toString() === req.user._id.toString()) {
        post
          .remove()
          .then((result) => {
            res.json(result);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
});

module.exports = router;
