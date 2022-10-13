import { createSlice, configureStore } from '@reduxjs/toolkit';

import { TThemeContext, TStoreState } from "./typing";


export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    storeCounter: 0,
    theme: {} as TThemeContext,
  },
  reducers: {
    increment: (state) => {
      state.storeCounter += 1
    },
    decrement: (state) => {
      state.storeCounter -= 1
    },
    setCounter: (state, payload) => {
      console.log("payload:", payload);
      state.storeCounter = Number(payload.payload);
      console.log("state.storeCounter:", state.storeCounter);
    },
    changeTheme: (state) => {
      state.theme = !state.theme.color ? {color: "#aa0000", backgroundColor: "#cccccc"} as TThemeContext : {} as TThemeContext
    },
  },
})

export default configureStore({
  reducer: {
    counter: counterSlice.reducer,
  }
})