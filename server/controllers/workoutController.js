require("../db/connection")
const Workout = require("../models/workoutModel");

// Get All Data

const getWorkouts = async (req, res) => {
  const user_id=req.user._id;

  try {
    const workoutData = await Workout.find({ user_id }).sort({ createdAt: -1 });
    res.status(200).json(workoutData);

  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
// Get  Data by id  

const getWorkout = async (req, res) => {
  try { 
    const id = req.params.id;

    const workoutData = await Workout.findById({ _id:id });
    res.status(200).json(workoutData);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
// Create Data
const creatWorkout = async (req, res) => {
  const { title, reps, load } = req.body;
  const user_id = req.user._id;

  try {
    const newWorkout = new Workout({ title, reps, load, user_id });
    const workoutdata = await newWorkout.save();
    res.status(201).json(workoutdata);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//  Update Data
const editWorkout = async (req, res) => {
  try {
    const id = req.params.id;
    const workoutData = await Workout.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.status(200).json(workoutData);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete Data
const deleteWorkout = async (req, res) => {
  try {
    const id = req.params.id;
    const workoutData = await Workout.findByIdAndDelete({ _id: id });
    res.status(200).json(workoutData);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  getWorkouts,
  getWorkout,
  creatWorkout,
  editWorkout,
  deleteWorkout,
};
