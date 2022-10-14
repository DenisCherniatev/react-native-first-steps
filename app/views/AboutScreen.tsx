import React, {useEffect} from 'react';
import {View, StyleSheet, SafeAreaView, StatusBar, ScrollView, Text} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import store, { counterSlice } from '../store';


export default function AboutScreen(props: {navigation: any, route: any}): React.ReactElement {
  const dispatch: typeof store.dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic" contentContainerStyle={styles.scrollableContainer}>
        <View style={styles.content}>
          <Text style={styles.appName}>React Native First Steps</Text>
          <Text style={styles.appVersion}>1.5.0</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollableContainer: {
    flex: 1,
    justifyContent: "center",
  },
  content: {
    alignItems: "center",
  },
  appName: {
    fontSize: 18,
    marginBottom: 8,
  },
  appVersion: {
  },
});
