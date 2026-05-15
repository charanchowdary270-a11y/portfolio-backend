const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// ✅ MongoDB connection (PUT YOUR URL HERE)
mongoose.connect("mongodb+srv://charanchowdary270_db_user:charan2007@cluster0.ibqtpjk.mongodb.net/?appName=Cluster0/portfolio")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// ✅ Schema + Model (THIS WAS MISSING / BROKEN)
const Project = mongoose.model("Project", {
  name: String,
  description: String,
});

// ✅ ROOT
app.get("/", (req, res) => {
  res.send("Backend running 🚀");
});

// ✅ FIXED PROJECT ROUTE (NO ERROR NOW)
app.get("/projects", async (req, res) => {
  try {
    const data = await Project.find();
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
});

// ✅ PORT (DON'T TOUCH)
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});