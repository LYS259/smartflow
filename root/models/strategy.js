// models/Strategy.js
const mongoose = require("mongoose");

const StrategySchema = new mongoose.Schema(
  {
    objective: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Strategy", StrategySchema);
