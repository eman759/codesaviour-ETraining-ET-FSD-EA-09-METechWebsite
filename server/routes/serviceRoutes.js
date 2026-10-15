const express = require("express");
const Service = require("../models/Service");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Public: Get all services
router.get("/", async (req, res) => {
  try {
    const services = await Service.find().sort({ order: 1 });
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch services" });
  }
});

// Protected: Create a service
router.post("/", authMiddleware, async (req, res) => {
  try {
    const service = await Service.create(req.body);
    res.status(201).json(service);
  } catch (error) {
    res.status(400).json({
      message: "Failed to create service",
      error: error.message,
    });
  }
});

// Protected: Update a service
router.put("/:id", authMiddleware, async (req, res) => {
  try {
    const service = await Service.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }

    res.status(200).json(service);
  } catch (error) {
    res.status(400).json({
      message: "Failed to update service",
      error: error.message,
    });
  }
});

// Protected: Delete a service
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const service = await Service.findByIdAndDelete(req.params.id);

    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }

    res.status(200).json({ message: "Service deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: "Failed to delete service" });
  }
});

module.exports = router;