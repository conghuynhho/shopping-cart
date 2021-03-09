import { UPDATE_TOTAL } from "./actionTypes";

const initialState = {
  data: {
    totalPrice: 0,
    totalQuantity: 0,
  },
};

const totalReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TOTAL:
      return{
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};

export default totalReducer;
