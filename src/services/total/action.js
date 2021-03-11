import { UPDATE_TOTAL } from "./actionTypes";

const updateTotal = cartProducts => dispatch => {

  let quantity = cartProducts.reduce((total, product) => {
    return total += product.quantity;
  }, 0);

  let totalPrice = cartProducts.reduce((total, product) => {
    return total += product.salePrice * product.quantity;
  }, 0);


  let result = {
    totalPrice: totalPrice,
    totalQuantity: quantity
  }

  dispatch({
    type: UPDATE_TOTAL,
    payload: result
  });
}

export default updateTotal;