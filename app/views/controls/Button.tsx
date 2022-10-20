import React, { useContext } from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

import R from "../../R";
import { ThemeContext } from "../../context";


export default function Button(props: {onPress: () => void, children: any}): React.ReactElement {
  const themeContextValue = useContext(ThemeContext);

  return (
    <TouchableOpacity onPress={props.onPress} style={[styles.button, themeContextValue]}>
      <Text style={[styles.buttonText, themeContextValue]}>{props.children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
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
    textAlign: "center",
  },
});