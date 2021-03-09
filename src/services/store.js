import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducer";

const store = createStore(rootReducer, applyMiddleware(thunk));

// const store = () => {
//   // initialState = {};
//   const appStore = createStore(rootReducer);
//   return appStore;
// };

export default store;