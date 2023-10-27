const express = require("express");
const app = express();
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Real Estate Web Application</h1>");
});

app.use("/user", userRoutes);

module.exports = app;
