import React, {useEffect} from 'react';
import {View, StyleSheet, SafeAreaView, StatusBar, ScrollView, Text, TouchableOpacity, Image, Alert} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import store, { counterSlice } from '../store';
import R from "../R";
import { TStoreState } from "../typing";


export default function SettingsScreen(props: {navigation: any, route: any}): React.ReactElement {
    const lang = useSelector((state: TStoreState) => state.counter.lang);  
    const dispatch: typeof store.dispatch = useDispatch();

    function handleResetCounter() {
      Alert.alert(
        "Are you sure?",
        "",
        [
            {
              text: "Yes",
              onPress: () => {
                dispatch(counterSlice.actions.setCounter(0));
              }
            },
            { text: "No", onPress: () => {} },
        ],
        { cancelable: false },
      );
    }

    function handleSwitchTheme() {
      Alert.alert(
        "Please confirm switching.",
        "",
        [
            {
              text: "Confirm",
              onPress: () => {
                dispatch(counterSlice.actions.changeTheme());
              }
            },
            { text: "Cancel", onPress: () => {} },
        ],
        { cancelable: false },
      );
    }

    function handleSwitchLanguage() {
      dispatch(counterSlice.actions.setModal({
        type: "SelectLanguage",
      }));
    }

    return (
      <SafeAreaView>
        <StatusBar barStyle={'light-content'} />
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <SettingsItem action={handleResetCounter} title={R.strings.resetCounter} />
          <SettingsItem action={handleSwitchTheme} title={R.strings.switchTheme} />
          <SettingsItem action={handleSwitchLanguage} title={R.strings.switchLanguage} />
        </ScrollView>
      </SafeAreaView>
    );
}

function SettingsItem(props: {action: () => void; title: string}) {
  return (
    <TouchableOpacity
      key={`SettingsItem-${props.title}`}
      onPress={() => {
        props.action()
    }}>
      <View style={styles.item}>
          <Text
              style={styles.itemText}
              numberOfLines={1}
          >
            {props.title}
          </Text>
          <Image
              style={styles.itemImage}
              source={R.images.angleRight}
          />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 16,
    marginVertical: 16,
  },
  itemText: {
    fontSize: 16,
    color: "#212121",
    flex: 1,
  },
  itemImage: {
      width: 30,
      height: 30,
      tintColor: "#212121",
  },
});