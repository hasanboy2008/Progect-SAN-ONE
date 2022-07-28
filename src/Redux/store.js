import { configureStore, combineReducers } from "@reduxjs/toolkit";

import { reProducts } from "./Produc";
import { reLoading } from "./Loading";
import { reSearchProduct } from "./Search";
import { reCart, reReloadCard } from "./Carta";
import { reUser } from "./User";
import { reLocalCard } from "./LocalCard";

const reducer = combineReducers({
  reProducts,
  reLoading,
  reSearchProduct,
  reCart,
  reUser,
  reReloadCard,
  reLocalCard,
});

export const Store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== "production",
});
