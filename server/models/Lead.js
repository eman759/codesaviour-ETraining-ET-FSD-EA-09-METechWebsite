const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      default: "",
      lowercase: true,
    },
    city: {
      type: String,
      default: "",
    },
    service: {
      type: String,
      default: "",
    },
    message: {
      type: String,
      required: true,
    },
    source: {
      type: String,
      enum: ["contact", "quote"],
      default: "contact",
    },
    status: {
      type: String,
      enum: ["new", "contacted", "closed"],
      default: "new",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Lead", leadSchema);