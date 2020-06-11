const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); //to parse json

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const usersRouter = require("./routes/users");
const studentsRouter = require("./routes/students");
const sectionsRouter = require("./routes/sections");

app.use("/uploads", express.static("uploades"));
app.use("/users", usersRouter);
app.use("/students", studentsRouter);
app.use("/sections", sectionsRouter);

//starting server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
