import { ADD_DATA } from "./ActionType";
import axios from "axios";

export const addData = (formData) => {
  return async (dispatch) => {
    dispatch({ type: ADD_DATA });

    try {
      const res = await fetch("https://doctorappointmentweb.onrender.com/users/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      dispatch({ type: ADD_DATA, payload: data });
    } catch (error) {
      console.log(error)
    }
  };
};