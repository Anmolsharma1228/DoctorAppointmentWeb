import {
  ADD_DATA,
  LOGIN_SUCCESS,
  PATIENT,
  GET_PATIENT_DATA,
  LOGOUT,
  APPOINTMENT,
  GETAPPOINTMENTDATA
} from "./ActionType";
import axios from "axios";

export const addData = (userData) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(
        "https://doctorappointmentweb.onrender.com/auth/signup",
        userData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      dispatch({
        type: ADD_DATA,
        payload: {
          httpresponse: res.data,
        },
      });
      return {
        payload: {
          httpresponse: res.data,
        },
      };
    } catch (err) {
      console.log("Error found", err);
    }
  };
};

export const appointment = (formData) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(
        "https://doctorappointmentweb.onrender.com/auth/BookAppointment",
        formData,{
          headers: {
      "Content-Type": "multipart/form-data",
    },
        }
      );

      dispatch({
        type: APPOINTMENT,
        payload: {
          httpresponse: res.data,
        },
      });

      return {
        payload: {
          httpresponse: res.data,
        },
      };
    } catch (error) {
      console.log("Error found", error.response?.data || error.message);
      throw error;
    }
  };
};

export const patientdata = (patientdata) => {
  return async (dispatch) => {
    try {
      const res = axios.post(
        "https://doctorappointmentweb.onrender.com/patient/post",
        patientdata,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      dispatch({
        type: PATIENT,
        payload: {
          httpresponse: res.data,
        },
      });
      return {
        payload: {
          httpresponse: res.data,
        },
      };
    } catch (error) {
      console.log("Error found", error);
    }
  };
};

export const getPatientData = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        "https://doctorappointmentweb.onrender.com/patient/get"
      );
      dispatch({
        type: GET_PATIENT_DATA,
        payload: res.data.patients,
      });
    } catch (error) {
      console.error("Error fetching patient data:", error);
    }
  };
};

export const getappointmentdata = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("https://doctorappointmentweb.onrender.com/auth/appointmentdata");

      dispatch({
        type: GETAPPOINTMENTDATA,
        payload: res.data.appointments,
      });
    } catch (error) {
      console.error("Error fetching appointments:", error);
    }
  };
};

export const login = (formdata) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(
        "https://doctorappointmentweb.onrender.com/auth/login",
        formdata
      );

      if (res.status === 200) {
        dispatch({ type: LOGIN_SUCCESS, payload: res.data.user });
        return Promise.resolve();
      }
    } catch (error) {
      return Promise.reject(error.response?.data?.message || "Login failed");
    }
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};
