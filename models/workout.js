const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      name: {
        type: String,
        trim: true,
        required: "Enter the exercises' name",
      },
      type: {
        type: String,
        trim: true,
        required: "Enter the exercises' type",
      },
      weight: {
        type: Number,
        default: 0,
      },
      sets: {
        type: Number,
        default: 0,
      },
      reps: {
        type: Number,
        default: 0,
      },
      duration: {
        type: Number,
        required: "Enter duration in min.",
        default: 0,
      },
      distance: {
        type: Number,
        default: 0,
      },
    },
  ],
});

const workout = mongoose.model("Workout", workoutSchema);

module.exports = workout;
