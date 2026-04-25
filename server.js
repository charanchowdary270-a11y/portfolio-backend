const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// 🔹 MongoDB Connection (PUT YOUR URL HERE)
mongoose.connect(mongodb+srv://charanchowdary270_db_user:charan2007@cluster0.ibqtpjk.mongodb.net/?appName=Cluster0, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected ✔"))
.catch((err) => console.error("MongoDB error:", err));


// 🔹 Project Model (Schema)
const projectSchema = new mongoose.Schema({
  name: String,
  description: String,
});

const Project = mongoose.model("Project", projectSchema);


// 🔹 Root Route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});


// 🔹 Projects API
app.get("/projects", async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    console.error("Error fetching projects:", err);
    res.status(500).send("Internal Server Error");
  }
});


// 🔹 PORT (IMPORTANT for Render)
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});