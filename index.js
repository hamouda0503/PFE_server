const express = require("express");
const mongoose = require("mongoose");

const app = express();

const Port = process.env.Port || 5000;

// mongoose.connect('mongodb+srv://Plantholic:plantholic@plantholic.y97ji.mongodb.net/Plantholic?retryWrites=true&w=majority');

// const connection = mongoose.connection;
// connection.once("open",()=>{
//     console.log("MongoDB connected");
// });

// middleware 

app.use(express.json());
const userRoute = require("./routes/user"); 

app.use("/user", userRoute);  

app.route("/").get((req,res)=>res.json("your first restapi 1"));

app.listen(Port, ()=>console.log(`your server is running on port ${Port}`));