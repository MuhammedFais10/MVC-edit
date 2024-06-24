const express = require("express");
const User = require("./model/userModel");
const path = require("path");
const router = require("./router/routes");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", router);

app.listen(4000, () => {
  console.log("connected");
});
