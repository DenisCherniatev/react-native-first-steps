/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StatusBar, TouchableOpacity, View} from 'react-native';
import { Provider } from 'react-redux';

import {Header} from 'react-native/Libraries/NewAppScreen';

import store from './app/store';
import CounterView from './app/views/CounterView';
import Button from './app/views/Button';
import { TThemeContext } from "./app/typing";
import { ThemeContext } from "./app/context";

const App = () => {
  const [customTheme, setCustomTheme] = useState({} as TThemeContext);

  function handleSwitchTheme() {
    setCustomTheme(!customTheme.color ? {color: "#aa0000", backgroundColor: "#cccccc"} as TThemeContext : {} as TThemeContext)
  }

  return (
    <Provider store={store}>
      <ThemeContext.Provider value={customTheme}>
        <SafeAreaView>
          <StatusBar barStyle={'light-content'} />
          <Button onPress={handleSwitchTheme}>Switch theme</Button>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <Header />
            <View>
              <CounterView />
            </View>
          </ScrollView>
        </SafeAreaView>
      </ThemeContext.Provider>
    </Provider>
  );
};

export default App;
