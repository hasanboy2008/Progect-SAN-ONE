import { createStore, combineReducers } from "redux";

import { reProducts } from "./Produc";

import { reLoading } from "./Loading";

const reducer = combineReducers({
  reProducts,
  reLoading,
});

export const Store = createStore(
  reducer,
  window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION()
);
