import { combineReducers } from "redux";
import cartReducer from "./cart/reducer";
import shelfReducer from "./shelf/reducer";
import totalReducer from "./total/reducer";

const rootReducer = combineReducers({
  shelf: shelfReducer,
  cart: cartReducer,
  total: totalReducer
})

export default rootReducer;