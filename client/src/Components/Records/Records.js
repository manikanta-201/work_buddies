import React from "react";
import { useEffect, useContext } from "react";
import { Data } from "../../Context/WorkoutContext";
import {useAuthContext} from "../../Hooks/useAuthContext"

import "./RecordStyle.css";


const Records = () => {
  const {user}=useAuthContext();
  const { workouts, getWorkouts, deleteWorkout, toggleUpdate } =
    useContext(Data);

  useEffect(() => {
   if(user){
    getWorkouts();
   }
  }, []);

  return (
    <div className="records" key={user._id}>
      {workouts &&
        workouts.map((item) => {
          return (
            <div className="record" key={item._id}>
              <h2>Exercise {item.title}</h2>
              <p> Reps:{item.reps}</p>
              <p>Load(in kg):{item.load}</p>
              <div className="btns">
                <button onClick={() => toggleUpdate(item)}>
                  <img src={require("../../assets/edit.png")} alt="" />
                </button>{" "}
                <button onClick={() => deleteWorkout(item._id)}>
                  <img src={require("../../assets/delete.png")} alt="" />
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Records;
