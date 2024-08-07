const express = require("express");
const authUser =require("../middleware/userMiddleware")
const router = express.Router();

// require Controllers

const { getWorkouts,
     getWorkout,
     creatWorkout,
     editWorkout,
     deleteWorkout,
 } = require("../controllers/workoutController");

 router.use(authUser)

// get all records
router.get("/", getWorkouts);

// Get single recrdes
router.get("/:id", getWorkout);

// Create recrde
router.post("/create",creatWorkout);
// update recrde

router.patch("/:id",editWorkout);
// dellete recourd

router.delete("/:id",deleteWorkout);



module.exports = router;
