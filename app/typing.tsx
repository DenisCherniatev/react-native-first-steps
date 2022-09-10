export type ISomeObject = {
  value: number;
  title: string;
};

export type TComponentProps = {
};

export type TComponentState = {
  counter: number;
};

export type TStoreCounterState = {
  storeCounter: number;
};

export type TStoreState = {
  counter: TStoreCounterState;
};

export interface IStoreActions {
  increment: () => void;
  decrement: () => void;
};

export interface IStore extends TStoreState, IStoreActions {
};
