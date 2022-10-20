import React, {useEffect} from 'react';
import {View, Text, SafeAreaView, StatusBar, ScrollView} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import store, { counterSlice } from '../store';
import R from "../R";
import { TStoreState } from "../typing";
import Button from './controls/Button';
import Radio from './controls/Radio';
import CounterView from './CounterView';


export default function HomeScreen(props: {navigation: any, route: any}): React.ReactElement {
  const lang = useSelector((state: TStoreState) => state.counter.lang);
  const dispatch: typeof store.dispatch = useDispatch();

  function handleSwitchTheme() {
    dispatch(counterSlice.actions.changeTheme());
  }

  return (
    <SafeAreaView>
      <StatusBar barStyle={'light-content'} />
      <Button onPress={handleSwitchTheme}>{R.strings.switchTheme}</Button>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <CounterView />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}