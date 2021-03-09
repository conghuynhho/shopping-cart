import {
  ADD_NEW_PRODUCT,
  PENDING_ADD_PRODUCT,
  PENDING_REMOVE_PRODUCT,
  REMOVE_A_PRODUCT,
  UPDATE_CART,
} from "./actionTypes";

const initialState = {
  products: [],
};
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CART:
      return {
        products: action.payload,
      };
    case ADD_NEW_PRODUCT:
      const newList = Array.from(state.products);
      newList.push(action.payload);
      return {
        ...state,
        products: newList,
      };
    case PENDING_ADD_PRODUCT:
      return {
        ...state,
        productToAdd: Object.assign({}, action.payload),
      };
    case REMOVE_A_PRODUCT:
      const result = state.products.filter(
        (product) => product.id !== action.payload.id
      );
      return {
        products: result,
      };
    case PENDING_REMOVE_PRODUCT:
      return {
        ...state,
        productToRemove: Object.assign({}, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
