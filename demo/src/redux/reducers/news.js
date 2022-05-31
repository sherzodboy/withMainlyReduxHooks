import { createReducer } from "@reduxjs/toolkit";
import {
  newsFetching,
  newsFetched,
  newsFetchingError,
  newsCreated,
  newsDeleted,
} from "./../actions";

const initialState = {
  news: [],
  newsLaodingStatus: "sher",
};

const news = createReducer(
  initialState,
  {
    [newsFetching]: (state) => (state.newsLaodingStatus = "loading"),
    [newsFetched]: (state, action) => {
      state.newsLaodingStatus = "sher";
      state.news = action.payload;
    },
    [newsFetchingError]: (state) => {
      state.newsLaodingStatus = "error";
    },
    [newsCreated]: (state, action) => {
      state.news.push(action.payload);
    },
    [newsDeleted]: (state, action) => {
      state.news.filter((s) => s.id !== action.payload);
    },
  },
  [],
  (state) => state
);

// const news = createReducer(initialState, (builder) => {
//   builder
//     .addCase(newsFetching, (state) => {
//       state.newsLaodingStatus = "loading";
//     })
//     .addCase(newsFetched, (state, action) => {
//       state.newsLaodingStatus = "sher";
//       state.news = action.payload;
//     })
//     .addCase(newsFetchingError, (state) => {
//       state.newsLaodingStatus = "error";
//     })
//     .addCase(newsCreated, (state, action) => {
//       state.news.push(action.payload);
//     })
//     .addCase(newsDeleted, (state, action) => {
//       state.news.filter((s) => s.id !== action.payload);
//     })
//     .addDefaultCase(() => {});
// });

export default news;
