import { configureStore } from "@reduxjs/toolkit";
import filter from "./reducers/filter";
import { stringMiddleware } from "../middleware/stringMiddleware";
import news from "../componenets/NewsList/news_slice";

export const store = configureStore({
  reducer: { news, filter },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(stringMiddleware),
  devTools: process.env.NODE_ENV !== "production",
});
