
require("dotenv").config();

const express = require("express");
const cors = require("cors");

const todoRoutes = require("./routes/todoRoutes");
const authRoutes = require("./routes/authRoutes");
const connectDB = require("./config/db");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Home route
app.get("/", (req, res) => {
    res.send("Welcome to TaskTrek");
});

// API routes
app.use("/todos", todoRoutes);
app.use("/auth", authRoutes);

// Start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running on port ${PORT}`);
});
