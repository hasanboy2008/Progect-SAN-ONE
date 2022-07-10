import { createStore, combineReducers } from "redux";

import { reProducts } from "./Produc";
import { reUser } from "./User";


const reducer = combineReducers({ reProducts,reUser });

export const Store = createStore(
  reducer,
  window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION()
);