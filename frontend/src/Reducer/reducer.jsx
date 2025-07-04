import { getappointmentdata } from "../Action/Action";
import { ADD_DATA, LOGIN_SUCCESS, LOGIN_FAILURE, PATIENT, GET_PATIENT_DATA, LOGOUT, APPOINTMENT, GETAPPOINTMENTDATA } from "../Action/ActionType"

const initistate = {
  data: [],
  user: null,
  error: null,
  patient: {},
  appointment: {},
  getappointmentdata: []
}

const reducer = (state = initistate, action) =>{
switch(action.type){
  case ADD_DATA:
    return {
      ...state,
      data: [...state.data, action.payload]
    }
 
    case APPOINTMENT:
      return {
        ...state,
        appointment: action.payload,
      };

    case GET_PATIENT_DATA:
      return {
        ...state,
        patient: action.payload,
      };

      case GETAPPOINTMENTDATA:
      return {
        ...state,
        getappointmentdata: action.payload,
      };

  case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        user: null,
        error: action.payload,
      };
    case LOGOUT:
     return{
      ...state,
      user: null,
      error: null,
     }   
  default:
    return state
}
}

export default reducer;