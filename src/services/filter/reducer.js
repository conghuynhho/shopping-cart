import { UPDATE_FILTER } from "./actionTypes";

const initialState = {
  item: [],
};

export default function filterReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_FILTER:
      return {
        ...state,
        item: action.payload,
      };

    default:
      return state;
  }
}
