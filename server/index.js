const express = require("express")
const app = express()
const PORT = 5000
const {MONGO_URI} = require("./keys")
const mongoose = require("mongoose")


app.get("/", (req, res)=>{
    res.send("ura")
})

mongoose.set('strictQuery', false);
mongoose.connect(MONGO_URI)

mongoose.connection.on("connected", ()=>{
    console.log("MongoDB is connected");
})
mongoose.connection.on("error", (err)=>{
    console.log("MongoDB is not working", err);
})

app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
})