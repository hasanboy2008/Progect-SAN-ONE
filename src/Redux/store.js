import { createStore, combineReducers } from "redux";

import { reProducts } from "./Produc";


const reducer = combineReducers({ reProducts });

export const Store = createStore(
  reducer,
  window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION()
);