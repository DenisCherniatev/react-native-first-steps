import {Alert} from 'react-native';
import { action, computed, thunk, thunkOn, actionOn, createStore, createTypedHooks } from "easy-peasy";
import AsyncStorage from '@react-native-async-storage/async-storage';

import R from "./R";
import { IStore, TThemeContext, TModalData, TLang, TStoreState } from "./typing";
import { setLocalization } from "./i18n/i18n";


// AsyncStorage.removeItem("lang")
export const store: IStore = {
  storeCounter: 0,
  theme: {} as TThemeContext,
  modalData: {} as TModalData,
  lang: null as TLang,
  increment: action((state) => {
    state.storeCounter += 1
  }),
  decrement: action((state) => {
    state.storeCounter -= 1
  }),
  setCounter: action((state, payload) => {
    state.storeCounter = payload;
    console.log("state.storeCounter:", state.storeCounter);
  }),
  changeTheme: action((state) => {
    state.theme = !state.theme.color ? {
      color: R.styles.colors.main,
      backgroundColor: "transparent",
      borderWidth: 1,
      borderColor: R.styles.colors.main
    } as TThemeContext : {
      borderColor: R.styles.colors.main,
      borderWidth: 1,
    } as TThemeContext
  }),
  setModal: action((state, payload) => {
    state.modalData = payload;
  }),
  resetModal: action((state) => {
    state.modalData = {} as TModalData;
  }),
  setLang: action((state, payload) => {
    state.lang = payload;
    setLocalization(state.lang);
  }),
  incrementAsync: thunk(async (actions) => {
    console.log("increment after 3 sec...");
    fetch('https://example.org/').then(async (reponse) => {
      const text = await reponse.text();
      const found = text.match(/<title>([a-zA-Z0-9 ]*)<\/title>/)
      const foundTitle  = found ? found[1] : "";
      const charCount = foundTitle.length;
  
      console.log("foundTitle:", foundTitle)
      console.log("charCount:", charCount)
  
      Alert.alert("Title: " + foundTitle + "\nNumber of characters: " + charCount);
  
      actions.setCounter(charCount);
    });
  }),
  loadLang: thunk(async (actions) => {
    const lang = await AsyncStorage.getItem("lang") as TLang;
    actions.setLang(lang ?? "en");
  }),
  storeLang: thunk(async (actions, payload, storeInstance) => {
    const state = storeInstance.getStoreState() as TStoreState;
    if(state.lang) {
      AsyncStorage.setItem("lang", state.lang);
    }
    else {
      AsyncStorage.removeItem("lang");
    }
  }),
};

const typedHooks = createTypedHooks<IStore>();

export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;

export default createStore(store);