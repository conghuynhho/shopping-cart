import { combineReducers } from "redux";
import cartReducer from "./cart/reducer";
import filterReducer from "./filter/reducer";
import shelfReducer from "./shelf/reducer";
import sortReducer from "./sort/reducer";
import totalReducer from "./total/reducer";

const rootReducer = combineReducers({
  shelf: shelfReducer,
  cart: cartReducer,
  total: totalReducer,
  sort: sortReducer,
  filter: filterReducer
})

export default rootReducer;