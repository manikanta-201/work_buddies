import { useEffect, useContext } from "react";

import { Data } from "../../Context/WorkoutContext";
import "./RecordStyle.css";

const Records = () => {
  const { workouts, getWorkouts, deleteWorkout, toggleUpdate } =
    useContext(Data);

  useEffect(() => {
    getWorkouts();
  }, []);

  return (
    <div className="records">
      {workouts &&
        workouts.map((item) => {
          return (
            <div className="record" key={item._id}>
              <h1>{item.title}</h1>
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
