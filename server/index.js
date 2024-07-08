const express =require("express");
const cors=require("cors")

const app = express();
// port
const port=process.env.PORT||8000

// db connecton

require("./db/connection")

// Require Routes
const workoutrRoutes =require("./routes/workoutRoutes");


// middlewares
app.use(express.json());
app.use(cors());



app.get('/',(req,res)=>{
    res.send("hello manikanta this backend project")
})

// Routes
app.use('/api/workouts',workoutrRoutes)

app.listen(port,()=>{
    console.log(`the server is running at PORT :${port}`)
})