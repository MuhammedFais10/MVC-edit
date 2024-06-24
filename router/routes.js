const {
  renderHome,
  addName,
  getEdit,
  postEdit,
} = require("../controller/userController");
const express = require("express");
const router = express.Router();

router.get("/", renderHome);
router.post("/add", addName);
router.get("/edit/:id", getEdit);
router.post("/edit/:id", postEdit);

module.exports = router;
