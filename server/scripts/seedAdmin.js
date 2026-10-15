const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bcrypt = require("bcryptjs");

const User = require("../models/User");
const Service = require("../models/Service");
const Course = require("../models/Course");

dotenv.config();

async function seedData() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");

    // Create or update admin
const adminEmail = "admin@metech.com";

if (!process.env.ADMIN_PASSWORD) {
  throw new Error("ADMIN_PASSWORD is missing from .env");
}

const passwordHash = await bcrypt.hash(
  process.env.ADMIN_PASSWORD,
  10
);

await User.findOneAndUpdate(
  { email: adminEmail },
  {
    name: "ME Technologies Admin",
    email: adminEmail,
    passwordHash,
    role: "admin",
  },
  { upsert: true, new: true, runValidators: true }
);

console.log("Admin user created or updated");

    // Seed six services
    const services = [
      {
        title: "Electrical Engineering",
        slug: "electrical-engineering",
        icon: "zap",
        shortText: "Electrical engineering solutions",
        description: "Engineering support for electrical systems.",
        order: 1,
      },
      {
        title: "Solar System Design",
        slug: "solar-system-design",
        icon: "sun",
        shortText: "Solar energy system design",
        description: "Solar system planning and design services.",
        order: 2,
      },
      {
        title: "Engineering Software",
        slug: "engineering-software",
        icon: "laptop",
        shortText: "Engineering software support",
        description: "Support for engineering design and simulation tools.",
        order: 3,
      },
      {
        title: "3D Design",
        slug: "3d-design",
        icon: "box",
        shortText: "Three-dimensional design",
        description: "3D modeling and design support.",
        order: 4,
      },
      {
        title: "Technical Training",
        slug: "technical-training",
        icon: "graduation-cap",
        shortText: "Professional technical training",
        description: "Training in engineering software and technical skills.",
        order: 5,
      },
      {
        title: "Engineering Consultation",
        slug: "engineering-consultation",
        icon: "settings",
        shortText: "Engineering consultation",
        description: "Consultation for engineering projects and concepts.",
        order: 6,
      },
    ];

    for (const serviceData of services) {
      await Service.findOneAndUpdate(
        { slug: serviceData.slug },
        serviceData,
        { upsert: true, new: true, runValidators: true }
      );
    }

    console.log("Six services seeded");

    // Seed Solar Design course
    await Course.findOneAndUpdate(
      { slug: "solar-design" },
      {
        title: "Solar Design",
        slug: "solar-design",
        tools: ["AutoCAD", "PVsyst"],
        duration: "4 weeks",
        fee: 0,
        outline: [
          "Introduction to solar energy",
          "Solar system components",
          "Basic solar system design",
        ],
        image: "",
      },
      { upsert: true, new: true, runValidators: true }
    );

    console.log("Solar Design course seeded");
  } catch (error) {
    console.error("Seeding failed:", error.message);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
  }
}

seedData();