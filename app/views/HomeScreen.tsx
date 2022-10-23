import React, {useEffect} from 'react';
import {View, Text, SafeAreaView, StatusBar, ScrollView, StyleSheet} from 'react-native';

import { useStoreState, useStoreActions } from "../store";
import R from "../R";
import Button from './controls/Button';
import CounterView from './CounterView';


export default function HomeScreen(props: {navigation: any, route: any}): React.ReactElement {
  const lang = useStoreState((state) => state.lang);
  const changeTheme = useStoreActions((actions) => actions.changeTheme);

  function handleSwitchTheme() {
    changeTheme();
  }

  return (
    <SafeAreaView>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.themeSwitcher}>
        <Button onPress={handleSwitchTheme}>{R.strings.switchTheme}</Button>
      </View>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <CounterView />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  themeSwitcher: {
    paddingHorizontal: 16,
  },
});
