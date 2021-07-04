const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: { 
    type: Date,
    default: () => new Date()
  },
  exercises: [
    {
      type: { 
        type: String,
        require: 'Please enter a type of exercises'
      },
      name: { 
        type: String,
        require: 'Please enter a name of exercises'
      }, 
      duration: { 
      type: Number,
      require: 'Please enter a duration of exercises'
      }, 
      distance: { 
        type: Number, 
      },
      weight: { 
        type: Number,
      },
      reps: {
      type: Number,
      },
      sets: {
      type: Number,
      }, 
    },
  ],
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;

