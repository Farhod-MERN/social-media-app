const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.send("Hello");
});

router.post("/signup", (req, res) => {
  const {name, email, password} = req.body
  if(!email || !password || !name ){
    res.json("All fields is required")
  }
  res.json("response is sent")
});


module.exports = router;
