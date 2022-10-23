import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Linking, Alert} from 'react-native';

import { useStoreState, useStoreActions } from "../store";
import Button from './controls/Button';
import R from '../R';


export default function CounterView(): React.ReactElement {
  const storeCounter = useStoreState((state) => state.storeCounter);
  const increment = useStoreActions((actions) => actions.increment);
  const incrementAsync = useStoreActions((actions) => actions.incrementAsync);

  function handleClick() {
    increment();
  }

  function handleClickAsync() {
    incrementAsync();
  }

  function openSite() {
    Linking.openURL("https://example.org");
  }

  return (
    <View style={styles.container}>
      <View style={styles.counterContainer}>
        <Text style={styles.counterText}>{storeCounter}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Button onPress={handleClick}>{R.strings.clickMe}</Button>
        <Button onPress={handleClickAsync}>{R.strings.countSiteTitle}</Button>
        <TouchableOpacity onPress={openSite} style={styles.link}>
          <Text style={styles.linkText}>{R.strings.openSite}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 48,
  },
  counterContainer: {
    width: "100%",
    alignItems: "center",
  },
  counterText: {
    fontSize: 72,
    fontWeight: "500",
    color: R.styles.colors.black,
  },
  buttonsContainer: {
    width: "100%",
    alignItems: "center",
  },
  button: {
    paddingHorizontal: 24,
    paddingVertical: 8,
    backgroundColor: R.styles.colors.main,
    borderRadius: 10,
    marginTop: 32,
  },
  buttonText: {
    fontSize: 18,
    color: R.styles.colors.white,
  },
  link: {
    paddingVertical: 32,
  },
  linkText: {
    fontSize: 18,
    color: R.styles.colors.main,
  },
});