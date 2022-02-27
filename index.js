const express = require("express");
const mongoose = require("mongoose");

const app = express();

const port = process.env.PORT || 5000;

mongoose.connect('mongodb+srv://Plantholic:plantholic@plantholic.y97ji.mongodb.net/Plantholic?retryWrites=true&w=majority');

const connection = mongoose.connection;
connection.once("open",()=>{
    console.log("MongoDB connected");
});

// middleware 

app.use(express.json());
const userRoute = require("./routes/user"); 

app.use("/user", userRoute);  
data = {
    msg: "Welcome ",
    info: "This is a root endpoint",
    Working: "Documentations ",
    request:
      "Hey ",
  };
  
  app.route("/").get((req, res) => res.json(data));
  
  app.listen(port, "0.0.0.0", () =>
    console.log(`welcome your listinnig at port ${port}`)
  );