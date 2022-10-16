import React, { useState } from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';

import R from "../../R";


export default function Radio(props: {onPress: (lang: string) => void, isSelected: boolean, value: string}): React.ReactElement {
  function handlePress() {
    props.onPress(props.value);
  }

  return (
    <TouchableOpacity onPress={handlePress} hitSlop={R.styles.hitSlop}>
      <View style={styles.outer}>
        {props.isSelected && <View style={styles.inner} />}        
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  outer: {
    width: 24,
    height: 24,
    borderColor: R.styles.colors.main,
    borderWidth: 2,
    backgroundColor: R.styles.colors.white,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  inner: {
    width: 14,
    height: 14,
    backgroundColor: R.styles.colors.main,
    borderRadius: 24,
  },
});