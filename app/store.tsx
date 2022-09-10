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
  },
})

export default configureStore({
  reducer: {
    counter: counterSlice.reducer,
  }
})