require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(authRoutes);

const mongoUri= `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.dk6pcvk.mongodb.net/?appName=Cluster0`;

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});
mongoose.connection.on("connected", () => {
  console.log("Connected to mongo instance");
});
mongoose.connection.on("error", err => {
  console.error("Error connecting to mongo", err);
});

app.get("/",  (req, res) => {
  res.send(`Your email: hi there`);
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
