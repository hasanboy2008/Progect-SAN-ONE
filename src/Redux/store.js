import { createStore, combineReducers } from "redux";

import { reProducts } from "./Produc";
import { reUser } from "./User";
import { reUpdateCard } from "./UpdateCard";
import { reSearch } from "./Search";

const reducer = combineReducers({ reProducts, reUser, reUpdateCard, reSearch });

export const Store = createStore(
  reducer,
  window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION()
);
