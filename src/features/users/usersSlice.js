import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Samuel Amkam" },
  { id: "1", name: "Amadu Kamara" },
  { id: "2", name: "Web Avenger" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
