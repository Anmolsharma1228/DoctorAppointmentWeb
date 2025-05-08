import { ADD_DATA } from "../Action/ActionType"

const initistate = {
  data: []
}

const reducer = (state = initistate, action) =>{
switch(action.type){
  case ADD_DATA:
    return {
      ...state,
      data: [...state.data, action.payload]
    }
  default:
    return state
}
}

export default reducer;