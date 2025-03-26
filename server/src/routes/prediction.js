const express = require("express");
const { getPrediction } = require("../controllers/predictionController");

const router = express.Router();

router.post("/", getPrediction); // Handle POST request

module.exports = router;
