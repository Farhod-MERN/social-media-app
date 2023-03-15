const jwt = require("jsonwebtoken")
const {JWT_SECRET} = require('../keys/index')
const mongoose = require("mongoose")
const User = mongoose.model("User")

module.exports = (req, res, next) => {
    const {authorization} = req.headers

    if(!authorization){
        res.status(401).json({error: "Please Sign in first"})
    }

    const token = authorization.replace("Farhod ", "")
    jwt.verify(token, JWT_SECRET, (err, payload)=>{
        if(err){
            console.log(err);
           return res.status(401).json({error : "Error occured",}) 
        }

        const {_id} = payload
        User.findById(_id).then(userData =>{
            req.user = userData
            next()
        })
    })
};
