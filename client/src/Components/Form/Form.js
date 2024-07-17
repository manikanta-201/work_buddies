import React, { useState } from "react";
import { useContext } from "react";
import axios from "axios";
import { Data } from "../../Context/WorkoutContext";
import "./FormStyles.css";
import { useAuthContext } from "../../Hooks/useAuthContext";

const Form = () => {
  const {
    workouts,
    setWorkouts,
    getWorkouts,
    form,
    setForm,
    updateForm,
    setUpdateForm,
  } = useContext(Data);

  const { user } = useAuthContext();

  // CREAT FORM FUNCTIONS

  const updateFormField = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const createWorkout = async (e) => {
    e.preventDefault();
    if (form.title === "" || form.reps === "" || form.load === "") {
      alert("all fields are requied!");
      return false;
    }
    console.log("next line here ...");
    const response = await axios.post(
      "http://localhost:8000/api/workouts/create",
      form,
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );


    setWorkouts([...workouts, response.data]);

    setForm({
      title: "",
      reps: "",
      load: "",
    });
    getWorkouts();
  };

  // UPDATE FORM FUNCTIONS

  const handleUpdateFieldChange = (e) => {
    const { name, value } = e.target;
    setUpdateForm({
      ...updateForm,
      [name]: value,
    });
  };

  // delete requrest

  const updateWorkout = async (e) => {
    e.preventDefault();

    const { _id, title, reps, load } = updateForm;
    await axios.patch(
      `http://localhost:8000/api/workouts/${_id}`,
      {   title,  reps,   load, },
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );

    console.log(`from form.js , user id is ${user._id}`);

    getWorkouts();
    setUpdateForm({
      _di: null,
      title: "",
      reps: "",
      load: "",
    });
  };

  return (
    <>
      {/* CREATE FORM */}
      {!updateForm._id && (
        <div className="form">
          <h1>CREATE RECORD</h1>

          <form onSubmit={createWorkout}>
            <div className="field">
              <label htmlFor=""> Title :</label>
              <input
                type="text"
                name="title"
                value={form.title}
                id=""
                onChange={updateFormField}
              />
            </div>

            <div className="field">
              <label htmlFor=""> Reps :</label>
              <input
                type="tel"
                name="reps"
                value={form.reps}
                id=""
                onChange={updateFormField}
              />
            </div>

            <div className="field">
              <label htmlFor=""> load (in kg)</label>
              <input
                type="number"
                name="load"
                value={form.load}
                id=""
                onChange={updateFormField}
              />
            </div>
            <button>submit</button>
          </form>
        </div>
      )}

      {/* UPDATE FORM */}
      {updateForm._id && (
        <div className="form">
          <h1>EDIT RECORD</h1>

          <form onSubmit={updateWorkout}>
            <div className="field">
              <label htmlFor=""> Title :</label>
              <input
                type="text"
                name="title"
                value={updateForm.title}
                id=""
                onChange={handleUpdateFieldChange}
              />
            </div>

            <div className="field">
              <label htmlFor=""> Reps:</label>
              <input
                type="tel"
                name="reps"
                value={updateForm.reps}
                id=""
                onChange={handleUpdateFieldChange}
              />
            </div>

            <div className="field">
              <label htmlFor=""> Load(ink kg)</label>
              <input
                type="tel"
                name="load"
                value={updateForm.load}
                id=""
                onChange={handleUpdateFieldChange}
              />
            </div>
            <button>Update</button>
          </form>
        </div>
      )}
    </>
  );
};

export default Form;
