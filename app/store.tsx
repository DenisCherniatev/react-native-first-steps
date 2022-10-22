import { createSlice, configureStore } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

import R from "./R";
import { TThemeContext, TStoreState, TModalData, TLang } from "./typing";
import { setLocalization } from "./i18n/i18n";


// AsyncStorage.removeItem("lang")
export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    storeCounter: 0,
    theme: {} as TThemeContext,
    modalData: {} as TModalData,
    lang: null as TLang,
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
      state.theme = !state.theme.color ? {
        color: R.styles.colors.main,
        backgroundColor: "transparent",
        borderWidth: 1,
        borderColor: R.styles.colors.main
      } as TThemeContext : {
        borderColor: R.styles.colors.main,
        borderWidth: 1,
      } as TThemeContext
    },
    setModal: (state, params: {payload: TModalData, type: string}) => {
      state.modalData = params.payload;
    },
    resetModal: (state) => {
      state.modalData = {} as TModalData;
    },
    setLang: (state, params: {payload: TLang, type: string}) => {
      state.lang = params.payload;
      setLocalization(state.lang);
    },
    storeLang: (state) => {
      if(state.lang) {
        AsyncStorage.setItem("lang", state.lang)
      }
      else {
        AsyncStorage.removeItem("lang")
      }
    },
  },
})

export default configureStore({
  reducer: {
    counter: counterSlice.reducer,
  }
})