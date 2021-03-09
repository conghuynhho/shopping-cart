import axios from "../api";
import { FETCH_DATA_PENDING, FETCH_ERROR, FETCH_PRODUCTS } from "./actionTypes";

const fetchProducts = () => async (dispatch) => {
  dispatch({
    type: FETCH_DATA_PENDING,
  })
  return axios.get("/products").then((res) => {
    let products = res.data;
    dispatch({
      type: FETCH_PRODUCTS,
      payload:{
        products: products,
        error: false,
        fetchDataPending: false
      },
    });
  }).catch(err => {
    dispatch({
      type: FETCH_ERROR,
      payload: {
        error: true
      }
    })

  });
};

export default fetchProducts;
