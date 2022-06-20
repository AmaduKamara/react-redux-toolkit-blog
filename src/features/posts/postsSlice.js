import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Learning Redux Toolkit",
    content:
      "I need to know Redux for MERN app development and state management",
  },
  {
    id: "2",
    title: "Learning the MERN Stack",
    content: "I need to know the MERN Stack",
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded(state, action) {
      state.push(action.payload);
    },
  },
});

export const selectAllPosts = (state) => state.posts;

export default postsSlice.reducer;
