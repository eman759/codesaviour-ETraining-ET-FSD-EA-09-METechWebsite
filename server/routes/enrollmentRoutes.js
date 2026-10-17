const express = require("express");
const router = express.Router();
const Enrollment = require("../models/Enrollment");
console.log("Enrollment model type:", typeof Enrollment);
console.log("Enrollment model methods:", Object.keys(Enrollment));

// Get all enrollments
router.get("/", async (req, res) => {
  try {
    const enrollments = await Enrollment.find().sort({ createdAt: -1 });
    res.status(200).json(enrollments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single enrollment
router.get("/:id", async (req, res) => {
  try {
    const enrollment = await Enrollment.findById(req.params.id);

    if (!enrollment) {
      return res.status(404).json({ message: "Enrollment not found" });
    }

    res.status(200).json(enrollment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Create enrollment
router.post("/", async (req, res) => {
  try {
    const enrollment = await Enrollment.create(req.body);
    res.status(201).json(enrollment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update enrollment
router.put("/:id", async (req, res) => {
  try {
    const enrollment = await Enrollment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!enrollment) {
      return res.status(404).json({ message: "Enrollment not found" });
    }

    res.status(200).json(enrollment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete enrollment
router.delete("/:id", async (req, res) => {
  try {
    const enrollment = await Enrollment.findByIdAndDelete(req.params.id);

    if (!enrollment) {
      return res.status(404).json({ message: "Enrollment not found" });
    }

    res.status(200).json({ message: "Enrollment deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;