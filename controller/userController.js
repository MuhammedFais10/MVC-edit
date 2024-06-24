const User = require("../model/userModel");

const renderHome = (req, res) => {
  User.find().then((users) => {
    res.render("home", { users: users });
  });
};

const addName = (req, res) => {
  newUser = new User({
    name: req.body.name,
  });

  newUser.save().then((result) => {
    res.redirect("/");
  });
};
const getEdit = (req, res) => {
  User.findById(req.params.id).then((user) => {
    res.render("edit", { user: user });
  });
};

const postEdit = (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body)
    .then((result) => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { renderHome, addName, getEdit, postEdit };
