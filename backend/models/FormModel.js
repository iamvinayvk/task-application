const mongoose = require("mongoose");
const formSchema = mongoose.Schema(
  {
    fname: {
      type: String,
      required: true,
    },
    lname: {
      type: String,
      required: true,
    },
    age: {
      type: String,
      required: true,
    },
    mobno: {
      type: String,
      required: true,
    },
    businessName: {
      type: String,
      required: true,
    },
    businessAddress: {
      type: String,
      required: true,
    },
    GSTno: {
      type: String,
      required: true,
    },
    loanamount: {
      type: String,
      required: true,
    },
    loaninterest: {
      type: String,
      required: true,
    },
    loantenure: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const Form = mongoose.model("form", formSchema);
module.exports = Form;
