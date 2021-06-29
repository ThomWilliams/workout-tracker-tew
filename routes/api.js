const router = require("express").Router();
const db = require("../models");

// post / create workouts
router.post("/api/workouts/", ({ body }, res) => {
  db.create(body)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});


// Put / Update workouts with new exercise data
router.put("/api/workouts/", ({ body }, res) => {
    db.insertMany(body)
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });

// get range of workouts
router.post("/api/workouts/range", ({ body }, res) => {
  db.insertMany(body)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// get range of workouts by date
router.get("/api/workouts/range", (req, res) => {
    db.find({})
      .sort({ date: -1 })
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });



module.exports = router;
