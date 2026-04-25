const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// ROOT (optional but good)
app.get("/", (req, res) => {
  res.send("Backend running 🚀");
});

// PROJECT ROUTE
app.get("/projects", async (req, res) => {
  const projects = await Project.find();   // your model
  res.json(projects);
});

// PORT (IMPORTANT for Render)
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});