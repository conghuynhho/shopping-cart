import {
  ADD_NEW_PRODUCT,
  PENDING_ADD_PRODUCT,
  PENDING_REMOVE_PRODUCT,
  REMOVE_A_PRODUCT,
  UPDATE_CART,
} from "./actionTypes";

export const addProduct = (product) => (dispatch) => {
  dispatch({
    type: ADD_NEW_PRODUCT,
    payload: product,
  });
};

export const pendingAddProduct = (product) => ({
  type: PENDING_ADD_PRODUCT,
  payload: product,
});

export const removeProduct = (product) => (dispatch) =>
  dispatch({
    type: REMOVE_A_PRODUCT,
    payload: product,
  });

export const pendingRemoveProduct = (product) => ({
  type: PENDING_REMOVE_PRODUCT,
  payload: product,
});

export const updateCart = (products) => (dispatch) => {
  dispatch({
    type: UPDATE_CART,
    payload: products,
  });
};
