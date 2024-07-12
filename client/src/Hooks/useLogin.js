import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogin= () => {
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setError(null);
    const response = await fetch("http://localhost:8000/api/user/login", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (!response.ok) {
      setError(data.error);
    }
    if (response.ok) {
      // save user data in localstorage
      localStorage.setItem("use", JSON.stringify(data));

      // update usere context
      dispatch({type: "LOGIN", payload:data });
    }
  };
  return {login, error}
};
