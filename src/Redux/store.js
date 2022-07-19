import { createStore, combineReducers } from "redux";

import { reProducts } from "./Produc";
import { reLoading } from "./Loading";
import { reSearchProduct } from "./Search";
import { reCart } from "./Carta";

const reducer = combineReducers({
  reProducts,
  reLoading,
  reSearchProduct,
  reCart
});

export const Store = createStore(
  reducer,
  window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION()
);
