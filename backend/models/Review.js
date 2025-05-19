const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  listing: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Listing', 
    required: true 
  },
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  rating: { 
    type: Number, 
    required: true, 
    min: 1, 
    max: 5 
  },
  comment: { 
    type: String,
    trim: true,
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  },
});

// Optional: To avoid duplicate reviews by same user on one listing
reviewSchema.index({ listing: 1, user: 1 }, { unique: true });

module.exports = mongoose.model('Review', reviewSchema);
