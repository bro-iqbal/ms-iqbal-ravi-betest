const express = require("express");
const cors = require("cors");
require("dotenv").config();

const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");

const app = express();
const port = 3000;

var corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const db = require("./models");
db.mongoose
  .connect(db.url)
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => {
    console.log("Cannot connect! ", err);
    process.exit();
  });

app.use("/users", userRoutes);

app.use("/auth", authRoutes);

app.listen(port, () => {
  console.log(`app running at port: ${port}`);
});
