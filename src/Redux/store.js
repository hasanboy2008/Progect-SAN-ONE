import { createStore, combineReducers } from "redux";

import { reProducts } from "./Produc";
import { reUser } from "./User";
import { reUpdateCard } from "./UpdateCard";

const reducer = combineReducers({ reProducts, reUser, reUpdateCard });

export const Store = createStore(
  reducer,
  window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION()
);
