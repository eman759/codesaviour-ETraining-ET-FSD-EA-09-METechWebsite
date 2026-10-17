const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const projectRoutes = require("./routes/projectRoutes");
const postRoutes = require("./routes/postRoutes");
const leadRoutes = require("./routes/leadRoutes");
const enrollmentRoutes = require("./routes/enrollmentRoutes");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/auth", require("./routes/auth"));
app.use("/api/services", require("./routes/serviceRoutes"));
app.use("/api/courses", require("./routes/courseRoutes"));
app.use("/api/batches", require("./routes/batchRoutes"));
app.use("/api/projects", projectRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/leads", leadRoutes);
app.use("/api/enrollments", enrollmentRoutes);

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