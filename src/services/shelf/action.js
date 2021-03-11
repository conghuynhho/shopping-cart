import axios from "../api";
import { FETCH_DATA_PENDING, FETCH_ERROR, FETCH_PRODUCTS } from "./actionTypes";

const compare = {
  lowestprice: (a, b) => a.salePrice - b.salePrice,
  highestprice: (a, b) => b.salePrice - a.salePrice,
};

const fetchProducts = (sortType, filters) => async (dispatch) => {
  dispatch({
    type: FETCH_DATA_PENDING,
  });
  return axios
    .get("/products")
    .then((res) => {
      let products = res.data;

      // xu ly sort

      if (!!sortType) {
        products = products.sort(compare[sortType]);
      }

      // xu ly filter
      if (!!filters && filters.length > 0) {
        products = products.filter((p) =>
          filters.find((filterSize) =>
            p.availableSizes.find((pSize) => pSize === filterSize)
          )
        );
      }

      dispatch({
        type: FETCH_PRODUCTS,
        payload: {
          products: products,
          error: false,
          fetchDataPending: false,
        },
      });
    })
    .catch((err) => {
      dispatch({
        type: FETCH_ERROR,
        payload: {
          error: true,
        },
      });
    });
};

export default fetchProducts;
