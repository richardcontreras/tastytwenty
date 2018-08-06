const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
  name: String,
  overall: {
    elo: Number
  }
});

module.exports = mongoose.model("Restaurant", restaurantSchema);
