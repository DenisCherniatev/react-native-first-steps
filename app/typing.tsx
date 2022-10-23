export type ISomeObject = {
  value: number;
  title: string;
};

export type TComponentProps = {
};

export type TComponentState = {
  counter: number;
};

export type TThemeContext = {
  color: string;
  backgroundColor: string;
  borderWidth: number;
  borderColor: string;
}

export type TModalType = "SelectLanguage";
export type TModalData = {
  type: TModalType;
  data?: any;
};

export type TLang = "en" | "es" | null;

export type TStoreState = {
  storeCounter: number;
  theme: TThemeContext;
  modalData: TModalData;
  lang: TLang;
};

import { Action, Thunk } from "easy-peasy";

export interface IStoreActions {
  increment: Action<TStoreState>;
  decrement: Action<TStoreState>;
  setCounter: Action<TStoreState, number>;
  incrementAsync: Thunk<IStoreActions>;
  changeTheme: Action<TStoreState>;
  setModal: Action<TStoreState, TModalData>;
  resetModal: Action<TStoreState>;
  setLang: Action<TStoreState, TLang>;
  storeLang: Thunk<IStoreActions, any, {getStoreState: () => TStoreState}>;
  loadLang: Thunk<IStoreActions>;
};

export interface IStore extends TStoreState, IStoreActions {
};
