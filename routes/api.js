const router = require("express").Router();
const Workout = require("../models/Workout.js");

// GET DATA - for All Workouts
router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .then((dbWorkouts) => {
      res.json(dbWorkouts);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// POST / CREATE - workouts
router.post("/api/workouts/", (req, res) => {
  Workout.create(body)
    .then((dbWorkouts) => {
      res.json(dbWorkouts);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// PUT / Update - workouts with new exercise data
router.put("/api/workouts/:id", ({ body }, res) => {
  Workout.create(body)
    .then(({ _id }) =>
      Workout.findOneAndUpdate({}, { $push: { exercise: _id } }, { new: true })
    )
    .then((dbWorkouts) => {
      res.json(dbWorkouts);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});



// GET RANGE - of workouts, sorted by date
// router.get("/api/workouts/range", (req, res) => {
//   Workout.find({})
//     .sort({ _id: -1 })
//     .limit(7)
//     .then((dbWorkouts) => {
//       res.json(dbWorkouts);
//     })
//     .catch((err) => {
//       res.status(400).json(err);
//     });
// });

module.exports = router;
