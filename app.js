const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(bodyParser.json());

mongoose.connect("mongodb+srv://tejabali2022:teja%40123@mini.bq3olq5.mongodb.net/test8")
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ DB Connection Error:", err));

app.use("/", userRoutes);

app.listen(3000, () => console.log("🚀 Server running at http://localhost:3000"));
