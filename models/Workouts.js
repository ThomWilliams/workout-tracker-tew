const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutsSchema = new Schema({
    date: Date,
    totalDuration: Number,
    numExercises: Number,
    totalWeight: Number,
    totalSets: Number,
    totalReps: Number,
    totalDistance: Number
});

const Workout = mongoose.model("Workouts", WorkoutsSchema);

module.exports = Workout;
