const router = require("express").Router();
const Workout = require("../models/Workout.js");

// POST / CREATE - workouts
router.post("/api/workouts", (req, res) => {
  Workout.create({})
    .then((dbWorkout) => {
      console.log("post", dbWorkout)
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// GET / READ DATA - for All Workouts
router.get("/api/workouts", (req, res) => {
    Workout.aggregate([{
        $addFields: {
            totalDuration: {
                $sum: `$exercises.duration`
            },
        },
    }])
      .then((dbWorkouts) => {
        console.log("get", dbWorkouts)
        res.json(dbWorkouts);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });


// GET / READ RANGE - of workouts, sorted by duration
router.get("/api/workouts/range", (req, res) => {
    Workout.aggregate([{
        $addFields: {
            totalDuration: {
                $sum: `$exercises.duration`
            },
        },
    }])
    .sort({ id: -1 })
    .limit(7)
      .then((dbWorkouts) => {
        res.json(dbWorkouts);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });



// PUT / Update - workouts with new exercise data
router.put("/api/workouts/:id", ({ body, params }, res) => {
    Workout.findByIdAndUpdate(params.id, { $push: { exercises: body } }, 
      { new: true }
    )
    .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });

  
// DELETE - Workouts
router.delete("/api/workouts", ({ body }, res) => {
    Workout.findByIdAndDelete(body.id)
      .then(() => {
        res.json(true);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });

module.exports = router;
