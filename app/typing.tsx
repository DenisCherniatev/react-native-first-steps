export type ISomeObject = {
  value: number;
  title: string;
};

export type TComponentProps = {
};

export type TComponentState = {
  counter: number;
};

export type TStoreState = {
  storeCounter: number;
};

export interface IStoreActions {
  increment: () => void;
  decrement: () => void;
};

export interface IStore extends TStoreState, IStoreActions {
};
