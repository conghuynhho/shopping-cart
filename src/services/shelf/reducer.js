import { FETCH_DATA_PENDING, FETCH_ERROR, FETCH_PRODUCTS } from "./actionTypes";

const initialState = {
  products: [],
  fetchDataPending: true,
  error: null,
};

const shelfReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_PENDING:
      return {
        ...state,
        fetchDataPending: true
      }
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload.products,
        fetchDataPending: false,
        error: null
      };
    case FETCH_ERROR:
      return {
        ...state,
        fetchDataPending: false,
        error: action.payload
      }
    default:
      return state;
  }
}

export default shelfReducer;