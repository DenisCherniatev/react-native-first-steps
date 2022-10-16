import { createSlice, configureStore } from '@reduxjs/toolkit';

import { TThemeContext, TStoreState, TModalData } from "./typing";


export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    storeCounter: 0,
    theme: {} as TThemeContext,
    modalData: {} as TModalData,
  },
  reducers: {
    increment: (state) => {
      state.storeCounter += 1
    },
    decrement: (state) => {
      state.storeCounter -= 1
    },
    setCounter: (state, params) => {
      console.log("params:", params);
      state.storeCounter = Number(params.payload);
      console.log("state.storeCounter:", state.storeCounter);
    },
    changeTheme: (state) => {
      state.theme = !state.theme.color ? {color: "#aa0000", backgroundColor: "#cccccc"} as TThemeContext : {} as TThemeContext
    },
    setModal: (state, params: {payload: TModalData, type: string}) => {
      state.modalData = params.payload;
    },
    resetModal: (state) => {
      state.modalData = {} as TModalData;
    },
  },
})

export default configureStore({
  reducer: {
    counter: counterSlice.reducer,
  }
})