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

export type TStoreCounterState = {
  storeCounter: number;
  theme: TThemeContext;
};

export type TStoreState = {
  counter: TStoreCounterState;
};

export interface IStoreActions {
  increment: () => void;
  decrement: () => void;
  incrementAsync: () => void;
  changeTheme: () => void;
};

export interface IStore extends TStoreState, IStoreActions {
};
