const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;
const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Workout", { useNewUrlParser: true }, { useUnifiedTopology: true });

// ROUTES
app.use(require("./routes/api.js"));
app.use(require("./routes/view.js"));



// CONTROLLERS

// GET STATS - Dashboard
app.get("/stats", (req, res) => {
    db.Workout.find({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });

  // GET EXERCISE - New Workout
app.get("/exercise", (req, res) => {
    db.Workout.find({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });

  // GET EXERCISE - Continue Workout
app.get("/exercise/:id", (req, res) => {
    db.Workout.find({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });


  app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
  