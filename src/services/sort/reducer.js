import { UPDATE_SORT } from "./actionTypes";

const initialState = {
  type: ''
}

export default function sortReducer (state = initialState, action){
  switch (action.type) {
    case UPDATE_SORT:
      return state;
  
    default:
      return state;
  }
}