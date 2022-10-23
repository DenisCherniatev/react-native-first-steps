import React, {useEffect} from 'react';
import {View, StyleSheet, SafeAreaView, StatusBar, ScrollView, Text, TouchableOpacity, Image, Alert} from 'react-native';

import { useStoreState, useStoreActions } from "../store";
import R from "../R";


export default function SettingsScreen(props: {navigation: any, route: any}): React.ReactElement {
    const lang = useStoreState((state) => state.lang);
    const setCounter = useStoreActions((actions) => actions.setCounter);
    const changeTheme = useStoreActions((actions) => actions.changeTheme);
    const setModal = useStoreActions((actions) => actions.setModal);    

    function handleResetCounter() {
      Alert.alert(
        R.strings.areYouSure,
        "",
        [
            {
              text: R.strings.yes,
              onPress: () => {
                setCounter(0);
              }
            },
            { text: R.strings.no, onPress: () => {} },
        ],
        { cancelable: false },
      );
    }

    function handleSwitchTheme() {
      Alert.alert(
        R.strings.pleaseConfirmWwitching,
        "",
        [
            {
              text: R.strings.confirm,
              onPress: () => {
                changeTheme();
              }
            },
            { text: R.strings.cancel, onPress: () => {} },
        ],
        { cancelable: false },
      );
    }

    function handleSwitchLanguage() {
      setModal({
        type: "SelectLanguage",
      });
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
    color: R.styles.colors.text,
    flex: 1,
  },
  itemImage: {
      width: 30,
      height: 30,
      tintColor: R.styles.colors.text,
  },
});