import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Linking, Alert} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import {TStoreState} from '../typing';
import store, { counterSlice } from '../store';


export default function CounterView(): React.ReactElement {
  const storeCounter = useSelector((state: TStoreState) => state.counter.storeCounter);
  const dispatch: typeof store.dispatch = useDispatch();

  function handleClick() {
    dispatch(counterSlice.actions.increment());
  }

  function handleClickAsync() {
    dispatch(incrementAsync());
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
        <TouchableOpacity onPress={handleClick} style={styles.button}>
          <Text style={styles.buttonText}>Click Me</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleClickAsync} style={styles.button}>
          <Text style={styles.buttonText}>{`Count characters\nin example.org title`}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={openSite} style={styles.link}>
          <Text style={styles.linkText}>{`Open example.org`}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const incrementAsync = () => async (dispatch: typeof store.dispatch) => {
  console.log("increment after 3 sec...");
  fetch('https://example.org/').then(async (reponse) => {
    const text = await reponse.text();
    const found = text.match(/<title>([a-zA-Z0-9 ]*)<\/title>/)
    const foundTitle  = found ? found[1] : "";
    const charCount = foundTitle.length;

    console.log("foundTitle:", foundTitle)
    console.log("charCount:", charCount)

    Alert.alert("Title: " + foundTitle + "\nNumber of characters: " + charCount);

    dispatch(counterSlice.actions.setCounter(charCount));
    // dispatch({type: "counter/setCounter", payload: charCount});  // this equals to previous call
  });
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
    color: "#000000",
  },
  buttonsContainer: {
    width: "100%",
    alignItems: "center",
  },
  button: {
    paddingHorizontal: 24,
    paddingVertical: 8,
    backgroundColor: "#005ce6",
    borderRadius: 10,
    marginTop: 32,
  },
  buttonText: {
    fontSize: 18,
    color: "#ffffff",
  },
  link: {
    paddingVertical: 32,
  },
  linkText: {
    fontSize: 18,
    color: "#005ce6",
  },
});