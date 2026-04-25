const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

const Project = require("./models/Project");

// 🔗 Connect MongoDB
mongoose.connect("mongodb://charanchowdary270_db_user:charan2007@ac-rs25la0-shard-00-00.ibqtpjk.mongodb.net:27017,ac-rs25la0-shard-00-01.ibqtpjk.mongodb.net:27017,ac-rs25la0-shard-00-02.ibqtpjk.mongodb.net:27017/?ssl=true&replicaSet=atlas-agvmhn-shard-0&authSource=admin&appName=Cluster0")
  .then(() => console.log("MongoDB Atlas Connected"))
  .catch(err => console.log(err));

// 📥 GET projects
app.get("/projects", async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});

// 📤 ADD project
app.post("/projects", async (req, res) => {
  const newProject = new Project(req.body);
  await newProject.save();
  res.json(newProject);
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});