const GameResult = require("../models/gameResult");

// Save game result
exports.saveGameResult = async (req, res) => {
  try {
    const { playerName, score, time } = req.body;

    const gameResult = new GameResult({
      playerName,
      score,
      time,
    });

    await gameResult.save();
    res
      .status(201)
      .json({ message: "Game result saved successfully", gameResult });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error saving game result", error: error.message });
  }
};

// Get game history
exports.getGameHistory = async (req, res) => {
  try {
    const gameResults = await GameResult.find().sort({ date: -1 }).limit(10); // Get last 10 results

    res.status(200).json(gameResults);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching game history", error: error.message });
  }
};
