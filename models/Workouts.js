const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutsSchema = new Schema({
    date: Date,
    type: String,
    name: String,
    duration: Number,
    weight: Number,
    reps: Number,
    sets: Number,
});

const Workout = mongoose.model("Workouts", WorkoutsSchema);

module.exports = Workout;
