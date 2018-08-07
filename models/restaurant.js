const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
  name: String,
  website: String,
  city: String,
  address: String,
  overall: {
    elo: Number
  },
  bagel: {
    elo: Number
  },
  bbq: {
    elo: Number
  },
  breakfast: {
    elo: Number
  },
  brewpub: {
    elo: Number
  },
  burger: {
    elo: Number
  },
  chicken: {
    elo: Number
  },
  chinese: {
    elo: Number
  },
  coffee: {
    elo: Number
  },
  deli: {
    elo: Number
  },
  dessert: {
    elo: Number
  },
  dimsum: {
    elo: Number
  },
  fastfood: {
    elo: Number
  },
  foodtruck: {
    elo: Number
  },
  hawaiian: {
    elo: Number
  },
  icecream: {
    elo: Number
  },
  indian: {
    elo: Number
  },
  italian: {
    elo: Number
  },
  korean: {
    elo: Number
  },
  latin: {
    elo: Number
  },
  mediterranean: {
    elo: Number
  },
  mexican: {
    elo: Number
  },
  noodles: {
    elo: Number
  },
  pizza: {
    elo: Number
  },
  seafood: {
    elo: Number
  },
  steak: {
    elo: Number
  },
  sushi: {
    elo: Number
  },
  thai: {
    elo: Number
  },
  vegan: {
    elo: Number
  },
  vietnamese: {
    elo: Number
  }
});

module.exports = mongoose.model("Restaurant", restaurantSchema);
