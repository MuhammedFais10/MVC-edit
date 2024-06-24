const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/crud")
  .then(() => {
    console.log("Connected to the database successfully!");
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });

userSchama = mongoose.Schema({
  name: String,
});

module.exports = mongoose.model("User", userSchama);
