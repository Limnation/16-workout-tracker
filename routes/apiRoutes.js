const router = require("express").Router();
const Workout = require("../models/workout.js");

router.get("/api/workouts", function (req, res) {
  Workout.find()

    .then((data) => {
      const updatedData = data.map((workout) => {
        const totalDuration = workout.exercises.reduce(
          (acc, curr) => acc + curr.duration,
          0
        );
        return {
          date: workout.date,
          exercises: workout.exercises,
          totalDuration,
        };
      });
      res.json(updatedData);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
  Workout.findByIdAndUpdate(
    params.id,
    { $push: { exercises: body } },
    { new: true, runValidators: true }
  )
    .then((data) => res.json(data))
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts/range", function (req, res) {
  Workout.find()

    .then((data) => {
      const updatedData = data.map((workout) => {
        const totalDuration = workout.exercises.reduce(
          (acc, curr) => acc + curr.duration,
          0
        );
        return {
          date: workout.date,
          _id: workout._id,
          exercises: workout.exercises,
          totalDuration,
        };
      });
      res.json(updatedData);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
