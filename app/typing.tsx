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
}

export type TModalType = "SelectLanguage";
export type TModalData = {
  type: TModalType;
  data?: any;
};

export type TLang = "en" | "es" | null;

export type TStoreCounterState = {
  storeCounter: number;
  theme: TThemeContext;
  modalData: TModalData;
  lang: TLang;
};

export type TStoreState = {
  counter: TStoreCounterState;
};

export interface IStoreActions {
  increment: () => void;
  decrement: () => void;
  incrementAsync: () => void;
  changeTheme: () => void;
  setModal: () => void;
};

export interface IStore extends TStoreState, IStoreActions {
};
