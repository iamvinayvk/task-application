const express = require("express");
const dotenv = require("dotenv");

//configuring the .env file

dotenv.config();
const app = express();
//using middleware
app.use(express.json());

//listening the server on PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server is running on Port: ${PORT}`));
