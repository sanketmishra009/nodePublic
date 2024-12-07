const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const userRoutes = require("./routes/user.route");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const dbConnect = require("./db/dbConnect");
dbConnect();

const cors = require("cors");
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/users", userRoutes);

module.exports = app;
