import React, { useContext } from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

import { ThemeContext } from "../context";

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
    backgroundColor: "#005ce6",
    borderRadius: 10,
    marginTop: 32,
  },
  buttonText: {
    fontSize: 18,
    color: "#ffffff",
  },
});