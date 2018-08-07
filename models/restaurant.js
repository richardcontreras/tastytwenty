const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
  name: String,
  website: String,
  city: String,
  address: String,
  overall: {
    elo: Number
  },
  burger: {
    elo: Number
  },
  pizza: {
    elo: Number
  },
  tacos: {
    elo: Number
  },
  padthai: {
    elo: Number
  },
  tamales: {
    elo: Number
  },
  generaltso: {
    elo: Number
  },
  dimsum: {
    elo: Number
  },
  omelette: {
    elo: Number
  },
  bagel: {
    elo: Number
  },
  coffee: {
    elo: Number
  },
  brunch: {
    elo: Number
  },
  vegan: {
    elo: Number
  },
  sandwich: {
    elo: Number
  },
  fries: {
    elo: Number
  },
  seafood: {
    elo: Number
  },
  icecream: {
    elo: Number
  },
  sushi: {
    elo: Number
  },
  chicken: {
    elo: Number
  },
  wings: {
    elo: Number
  },
  ribs: {
    elo: Number
  },
  steak: {
    elo: Number
  },
  pasta: {
    elo: Number
  },
  pancakes: {
    elo: Number
  },
  pho: {
    elo: Number
  },
  curry: {
    elo: Number
  },
  shawarma: {
    elo: Number
  },
  koreanbbq: {
    elo: Number
  }
});

module.exports = mongoose.model("Restaurant", restaurantSchema);
