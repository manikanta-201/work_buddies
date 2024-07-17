
// to access data frfom user storning data into database and store data in local storage

import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();
  //handles post request
  const signup = async (email, password) => {
    console.log(email, password);
    setError(null);
   
     //provide method header and body 
    const response = await fetch("http://localhost:8000/api/user/signup",
      {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (!response.ok) {
      setError(data.response);
    }
    if (response.ok) {
      // save user data in localstorage
      localStorage.setItem("use", JSON.stringify(data));

      // update usere context
      dispatch({type: "LOGIN", payload:data });
    }
  };
  return {signup, error}
};




