const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const Form = require("./models/FormModel");
const path = require("path");

//configuring the .env file

dotenv.config();
const app = express();
connectDB();
//using middleware
app.use(express.json());

//routes
app.post("/api/submit", async (req, res) => {
  const {
    fname,
    lname,
    age,
    mobno,
    businessName,
    businessAddress,
    GSTno,
    loanamount,
    loaninterest,
    loantenure,
  } = req.body;
  console.log(req.body);
  const form = await Form.create({
    fname,
    lname,
    age,
    mobno,
    businessName,
    businessAddress,
    GSTno,
    loanamount,
    loaninterest,
    loantenure,
  });
  if (form) {
    res.status(201).json({
      _id: form._id,
      fname: form.fname,
      lname: form.lname,
      age: form.age,
      mobno: form.mobno,
      businessName: form.businessName,
      businessAddress: form.businessAddress,
      GSTno: form.GSTno,
      loanamount: form.loanamount,
      loaninterest: form.loaninterest,
      loantenure: form.loantenure,
    });
  } else {
    res.status(400);
  }
  //   res.json({
  //     fname,
  //     lname,
  //     age,
  //     mobno,
  //     businessName,
  //     businessAddress,
  //     GSTno,
  //     loantenure,
  //     loanamount,
  //     loaninterest,
  //   });
});
//deployment
__dirname = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "frontend/build/")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("API is Running..");
  });
}

//listening the server on PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server is running on Port: ${PORT}`));
