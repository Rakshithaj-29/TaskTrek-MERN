require("dotenv").config();
const express = require("express");
const cors = require("cors");

const todoRoutes = require("./routes/todoRoutes");
const authRoutes=require("./routes/authRoutes");
const connectDB=require("./config/db");

const app = express();
connectDB();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to TaskTrek ");
});

app.use("/todos",todoRoutes);
app.use("/auth",authRoutes);
app.use(connectDB);
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});