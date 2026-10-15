const express = require("express");
const Course = require("../models/Course");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Get all courses
router.get("/", async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch courses" });
  }
});

// Get one course
router.get("/:id", async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    res.status(200).json(course);
  } catch (error) {
    res.status(400).json({ message: "Invalid course ID" });
  }
});

// Create a course
router.post("/", authMiddleware, async (req, res) => {
  try {
    const course = await Course.create(req.body);
    res.status(201).json(course);
  } catch (error) {
    res.status(400).json({
      message: "Failed to create course",
      error: error.message,
    });
  }
});

// Update a course
router.put("/:id", authMiddleware, async (req, res) => {
  try {
    const course = await Course.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    res.status(200).json(course);
  } catch (error) {
    res.status(400).json({
      message: "Failed to update course",
      error: error.message,
    });
  }
});

// Delete a course
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const course = await Course.findByIdAndDelete(req.params.id);

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    res.status(200).json({ message: "Course deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: "Failed to delete course" });
  }
});

module.exports = router;