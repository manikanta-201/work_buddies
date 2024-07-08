const workout = require("../models/workoutModel");

// Get All Data

const getWorkouts = async (req, res) => {
  try {
    const workoutData = await workout.find().sort({ createdAt: -1 });
    res.status(200).json(workoutData);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
// Get a single Data

const getWorkout = async (req, res) => {
  try {
    const id = req.params.id;
    const workoutData = await workout.findById({ _id: id });
    res.status(200).json(workoutData);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
// Create Data
const creatWorkout = async (req, res) => {
  try {
    const newWorkout = new workout(req.body);
    // console.log(newWorkout)
    const workoutdata = await newWorkout.save();
    res.status(201).json(workoutdata);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//  Update Data
const editWorkout = async (req, res) => {
  try {
    const id = req.params.id;
    const workoutData = await workout.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.status(200).json(workoutData);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete Data
const deleteWorkout=async (req,res)=>{
  try{
    const id = req.params.id;
    const workoutData=await workout.findByIdAndDelete({_id:id});
    res.status(200).json(workoutData);

  }catch(err){
    res.status(400).json({ error: err.message });
  }
}

module.exports = {
  getWorkouts,
  getWorkout,
  creatWorkout,
  editWorkout,
  deleteWorkout,
};
