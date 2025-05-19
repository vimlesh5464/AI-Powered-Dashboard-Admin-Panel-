const mongoose = require('mongoose');

const aiInsightSchema = new mongoose.Schema({
  type: { type: String, required: true }, // e.g., 'listing-analysis', 'user-behavior'
  data: { type: mongoose.Schema.Types.Mixed, required: true }, // flexible to store JSON data
  generatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('AIInsight', aiInsightSchema);
