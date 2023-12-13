import { createSlice } from "@reduxjs/toolkit";
import { User } from "../types";

type initialState = {
  posts: User[];
};

const initialState: initialState = {
  posts: [],
};

export const postsReducer = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addFavourites: (state, action) => {
      state.posts = [...state.posts, action.payload];
    },
    deleteFavourites: (state, action) => {
      state.posts = state.posts.filter((el) => el.userId !== action.payload);
    },
  },
});

export default postsReducer.reducer;
export const { actions } = postsReducer;
