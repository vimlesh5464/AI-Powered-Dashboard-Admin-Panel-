const express = require('express');
const router = express.Router();
const Listing = require('../models/Listing');

// Get all listings
router.get('/', async (req, res) => {
  const listings = await Listing.find();
  res.json(listings);
});

// Create a new listing
router.post('/', async (req, res) => {
  const newListing = new Listing(req.body);
  await newListing.save();
  res.status(201).json(newListing);
});

module.exports = router;
