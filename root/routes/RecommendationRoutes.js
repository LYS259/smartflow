// routes/RecommendationRoutes.js
const express = require("express");
const { getRecommendations } = require("../controllers/recommendationController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// جلب التوصيات بناءً على البيانات
router.get("/", authMiddleware, getRecommendations);

module.exports = router;
