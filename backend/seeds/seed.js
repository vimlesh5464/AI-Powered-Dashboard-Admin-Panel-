const mongoose = require('mongoose');
const Listing = require('../models/Listing');
const connectDB = require('../config/db');

connectDB();

const sampleListings = [
  {
    title: "Cozy Apartment",
    description: "A nice and cozy apartment in the city center.",
    price: 1500,
    location: "New York",
  },
  {
    title: "Beach House",
    description: "Beautiful house near the beach with sea view.",
    price: 3000,
    location: "California",
  },
  {
    title: "Mountain Cabin",
    description: "Peaceful cabin in the mountains for weekend getaways.",
    price: 1200,
    location: "Colorado",
  },
];

const sampleUsers = [
  { name: 'Alice', email: 'alice@example.com' },
  { name: 'Bob', email: 'bob@example.com' },
];

const sampleBookings = [
  { userId: null, date: new Date(), status: 'confirmed' },
  { userId: null, date: new Date(), status: 'pending' },
];

const sampleReviews = [
  { userId: null, bookingId: null, rating: 5, comment: 'Great service!' },
];

const sampleInsights = [
  { title: 'Insight 1', content: 'AI generated content here' },
];

const seedDB = async () => {
    await Listing.deleteMany(); // Clear existing listings
    await Listing.insertMany(sampleListings); // Insert sample listings
    console.log("Database seeded!");
    mongoose.connection.close();
};

seedDB();
