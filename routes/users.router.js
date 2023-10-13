const express = require("express");
const router = express.Router();

const {
  login,
  auth
} = require("../controllers/users.controller");

router.post('/login',login);
router.get('/auth',auth);

module.exports = router;