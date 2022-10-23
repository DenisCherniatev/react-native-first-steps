/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { StoreProvider } from "easy-peasy"

import store from './app/store';
import AppNavigation from "./app/AppNavigation";


const App = () => {
  return (
    <StoreProvider store={store}>
      <AppNavigation />
    </StoreProvider>
  );
};

export default App;
