import { configureStore, combineReducers } from "@reduxjs/toolkit";

import { reProducts } from "./Produc";
import { reLoading } from "./Loading";
import { reSearchProduct } from "./Search";
import { reCart, reReloadCard } from "./Carta";
import { reUser } from "./User";

const reducer = combineReducers({
  reProducts,
  reLoading,
  reSearchProduct,
  reCart,
  reUser,
  reReloadCard,
});

export const Store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== "production",
});
