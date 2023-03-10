import { createSlice } from '@reduxjs/toolkit';

const initialState = {initialList:[] , initialEntry:{}}
const listSlice = createSlice({
  name: 'list',
  initialState: initialState,
  reducers: {
    setList(state, action) {
      state.initialList =  action.payload;
      // console.log(action.payload)
      localStorage.setItem("list", JSON.stringify(action.payload));
      // console.log("this ran from edit")
    },
    setEntry(state, action) {
      state.initialEntry =  action.payload;
      // console.log(action.payload)
      localStorage.setItem("entry", JSON.stringify(action.payload));
    }
  },
});


export const listActions = listSlice.actions;

export default listSlice.reducer;