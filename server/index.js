const express = require("express")
const mongoose = require("mongoose")
require("./models/user")
require("./models/post")

const app = express()
const {MONGO_URI} = require("./keys")
const PORT = 5000

const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration

app.use(express.json())
app.use(require("./routers/auth"))
app.use(require("./routers/post"))
app.use(require("./routers/users"))


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