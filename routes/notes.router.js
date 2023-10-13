const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");

const {
  getAllNotes,
  addNewNote,
  editNote,
  deleteNote,
  getNoteById
} = require("../controllers/notes.controller");

router.get("/all", getAllNotes);
router.get("/by-id/:id", getNoteById);
router.post("/add", /* auth, */ addNewNote);
router.put("/edit/:id", /* auth, */ editNote);
router.delete("/delete/:id", /* auth, */ deleteNote);

module.exports = router;
