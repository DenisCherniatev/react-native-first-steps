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
import {SafeAreaView, ScrollView, StatusBar, View} from 'react-native';

import {Header} from 'react-native/Libraries/NewAppScreen';

import {CounterView} from './app/views/CounterView';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'light-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Header />
        <View>
          <CounterView />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
