require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const mongoose = require("mongoose");
const cors = require("cors");
const goalRouter = require("./routes/goalRouter");
const sendMailg = require("./controller/mail");

//middleware
app.use(express.json());
app.use(cors());

//route
app.use("/api/goals", goalRouter);
app.get("/mail", (req, res) => {
  res.status(200).send(`<h2>Test email</h2>
  <a href= '/send'>send mail</a>
  `);
});
app.get("/send", sendMailg);

//db connection
const start = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`server running`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();

app.use((req, res) => {
  res.status(404).send("Resource not found");
});
