import React, {useEffect} from 'react';
import {View, StyleSheet, SafeAreaView, StatusBar, ScrollView, Text} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import store, { counterSlice } from '../store';


export default function OptionsScreen(props: {navigation: any, route: any}): React.ReactElement {
  const dispatch: typeof store.dispatch = useDispatch();

  return (
    <SafeAreaView>
      <StatusBar barStyle={'light-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text>Options</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}