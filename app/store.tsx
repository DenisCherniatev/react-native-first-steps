import { createSlice, configureStore } from '@reduxjs/toolkit'


export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    storeCounter: 0,
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
  },
})

export default configureStore({
  reducer: {
    counter: counterSlice.reducer,
  }
})