import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducer";

// const store = createStore(rootReducer, applyMiddleware(thunk));

const store = (initialState) => {
  initialState =
    JSON.parse(window.localStorage.getItem("cartState")) || initialState;
  const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

  store.subscribe(() => {
    const state = store.getState();
    const persist = {
      cart: state.cart,
      total: state.total,
    };

    window.localStorage.setItem("cartState", JSON.stringify(persist));
  });
  return store;
};

export default store;
