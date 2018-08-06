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

app.get("/api/get", (req, res) => {
  Restaurant.aggregate([{ $sample: { size: 2 } }]).exec(function(
    err,
    foundRestaurants
  ) {
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

app.post("/api/update/:id", (req, res) => {
  console.log(req.body);
  const newElo = req.body.newElo;
  Restaurant.findById(req.params.id).then(post => {
    post.overall.elo = newElo;
    post.save();
  });
});

app.listen(process.env.PORT || 3001, () => {
  console.log("Chow champs is up and running on Port 3001...");
});
