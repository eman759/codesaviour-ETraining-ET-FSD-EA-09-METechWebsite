const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    capacity: {
      type: String,
      default: "",
    },
    sector: {
      type: String,
      default: "",
    },
    systemType: {
      type: String,
      default: "",
    },
    city: {
      type: String,
      default: "",
    },
    images: {
      type: [String],
      default: [],
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", projectSchema);