const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/database");
const cors = require("cors");
const User = require("./models/user");
const bcrypt = require("bcrypt");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = new User({
      name,
      email,
      password,
    });

    await user.save();
    res.status(201).send("User registered successfully");
  } catch (err) {
    res.status(400).send("Error  :" + err.message);
  }
}); 

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email }).then((user) => {
    if (user) {
      if (user.password == password) {
        res.json("Success");
      } else {
        res.json("The password is incorrect");
      }
    } else {
      res.json("No record Exists");
    }
  });
});
const PORT = 3000;

connectDB()
  .then(() => {
    console.log("Connection successfull");
    app.listen(PORT, () => {
      console.log(`Server Started and running at ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Connection failed :", { err });
  });
