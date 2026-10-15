const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/auth", require("./routes/auth"));
app.use("/api/services", require("./routes/serviceRoutes"));
app.use("/api/courses", require("./routes/courseRoutes"));
app.use("/api/batches", require("./routes/batchRoutes"));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error.message);
  });

app.get("/", (req, res) => {
  res.send("ME Technologies API is running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});