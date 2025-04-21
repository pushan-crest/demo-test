const express = require("express");
const router = express.Router();
const {
  saveGameResult,
  getGameHistory,
} = require("../controllers/gameController");

// Save game result
router.post("/save", saveGameResult);

// Get game history
router.get("/history", getGameHistory);

module.exports = router;
