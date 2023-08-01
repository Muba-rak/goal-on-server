require("dotenv").config();
const express = require("express");
const app = express();
const PORT = 8000;
const mongoose = require("mongoose");
const goalRouter = require("./routes/goalRouter");

//middleware
app.use(express.json());

//route
app.use("/api/goals", goalRouter);

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
