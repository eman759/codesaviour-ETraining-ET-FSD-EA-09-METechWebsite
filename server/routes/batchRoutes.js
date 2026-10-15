const express = require("express");
const Batch = require("../models/Batch");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Get all batches
router.get("/", async (req, res) => {
  try {
    const batches = await Batch.find().populate("course");
    res.status(200).json(batches);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch batches" });
  }
});

// Get one batch
router.get("/:id", async (req, res) => {
  try {
    const batch = await Batch.findById(req.params.id).populate("course");

    if (!batch) {
      return res.status(404).json({ message: "Batch not found" });
    }

    res.status(200).json(batch);
  } catch (error) {
    res.status(400).json({ message: "Invalid batch ID" });
  }
});

// Create a batch
router.post("/", authMiddleware, async (req, res) => {
  try {
    const batch = await Batch.create(req.body);
    res.status(201).json(batch);
  } catch (error) {
    res.status(400).json({
      message: "Failed to create batch",
      error: error.message,
    });
  }
});

// Update a batch
router.put("/:id", authMiddleware, async (req, res) => {
  try {
    const batch = await Batch.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!batch) {
      return res.status(404).json({ message: "Batch not found" });
    }

    res.status(200).json(batch);
  } catch (error) {
    res.status(400).json({ message: "Failed to update batch" });
  }
});

// Delete a batch
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const batch = await Batch.findByIdAndDelete(req.params.id);

    if (!batch) {
      return res.status(404).json({ message: "Batch not found" });
    }

    res.status(200).json({ message: "Batch deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: "Failed to delete batch" });
  }
});

module.exports = router;