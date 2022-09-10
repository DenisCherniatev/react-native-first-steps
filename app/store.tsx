import { Reducer } from 'react';
import { createStore, AnyAction } from 'redux';

import { TStoreState } from './typing';

const defaultStoreState: TStoreState = {
  storeCounter: 0,
}

const todosReducer = (state=defaultStoreState, action: AnyAction): TStoreState => {
  switch (action.type) {
    case 'INC_COUNTER':
      return {...state, storeCounter: state.storeCounter + 1 }
    case 'DEC_COUNTER':
      return {...state, storeCounter: state.storeCounter - 1 }
    default:
      return state
  }
}

const store = createStore(todosReducer);
console.log("createStore...");

export default store