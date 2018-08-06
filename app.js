const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const keys = require("./config/keys");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect(
  keys.mongoURI,
  { useNewUrlParser: true }
);
const Restaurant = require("./models/restaurant");

app.get("/api/matchups/:category", (req, res) => {
  const categoryTerm = `${req.params.category}.elo`;
  Restaurant.aggregate([
    { $match: { [categoryTerm]: { $exists: true } } },
    { $sample: { size: 2 } }
  ]).exec(function(err, foundRestaurants) {
    if (err) {
      console.log(err);
    } else {
      res.json(foundRestaurants);
    }
  });
});

app.get("/api/rankings/:category", (req, res) => {
  const categoryTerm = req.params.category;
  Restaurant.find({ [categoryTerm]: { $exists: true } })
    .limit(10)
    .sort({ "overall.elo": -1 })
    .exec(function(err, foundRestaurants) {
      if (err) {
        console.log(err);
      } else {
        res.json(foundRestaurants);
      }
    });
});

app.post("/api", (req, res) => {
  console.log(req);

  const newRestaurant = {
    name: req.body.name,
    overall: {
      elo: 800
    },
    burger: {
      elo: 800
    },
    pizza: {
      elo: 800
    }
  };

  Restaurant.create(newRestaurant, (err, newlyCreated) => {
    if (err) {
      console.log(err);
    } else {
      console.log(newlyCreated);
    }
  });
});

app.post("/api/update/:id/:category", (req, res) => {
  const newElo = req.body.newElo;
  const category = req.params.category;
  Restaurant.findById(req.params.id)
    .then(post => {
      post[category].elo = newElo;
      post.save();
    })
    .then(response => res.send(response));
});

app.listen(process.env.PORT || 3001, () => {
  console.log("Chow champs is up and running on Port 3001...");
});
