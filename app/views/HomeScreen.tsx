import React, {useEffect} from 'react';
import {View, StyleSheet, SafeAreaView, StatusBar, ScrollView} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import store, { counterSlice } from '../store';
import Button from './Button';
import CounterView from './CounterView';


export default function HomeScreen(props: {navigation: any, route: any}): React.ReactElement {
  const dispatch: typeof store.dispatch = useDispatch();

  function handleSwitchTheme() {
    dispatch(counterSlice.actions.changeTheme());
  }

  return (
    <SafeAreaView>
      <StatusBar barStyle={'light-content'} />
      <Button onPress={handleSwitchTheme}>Switch theme</Button>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <CounterView />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}