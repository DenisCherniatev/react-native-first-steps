import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image, KeyboardAvoidingView, StyleSheet } from "react-native";

import R from "../../R";
import Radio from "../controls/Radio";


export function SelectLanguageModal(props: {closeButtonPressHandler?: () => void}) {
    const [selectedLang, setSelectedLand] = useState("en");

    function chooseLanguage(value: string) {
        setSelectedLand(value);
    }

    return (
        <ScrollableModal {...props}>
            <View style={styles.selector}>

                <View style={styles.radioWrapper}>
                    <Radio isSelected={selectedLang === "en"} onPress={chooseLanguage} value="en" />
                    <Text style={styles.radioText}>{R.strings.english}</Text>
                </View>

                <View style={styles.radioWrapper}>
                    <Radio isSelected={selectedLang === "es"} onPress={chooseLanguage} value="es" />
                    <Text style={styles.radioText}>{R.strings.spanish}</Text>
                </View>

            </View>
        </ScrollableModal>
    )
}

export function ScrollableModal(props: {closeButtonPressHandler?: () => void, children: any}) {    
  return (
      <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.container}
          contentContainerStyle={styles.scrollableContainer}
      >
          <KeyboardAvoidingView behavior="position">
              <View style={styles.modal}>
                  {props.closeButtonPressHandler && <CloseModalButton onPress={props.closeButtonPressHandler} />}
                  {props.children}
              </View>
          </KeyboardAvoidingView>
      </ScrollView>
  )
}

export function CloseModalButton(props: {onPress: () => void}) {
  return (
      <View style={styles.closeButton}>
          <TouchableOpacity onPress={props.onPress} hitSlop={R.styles.hitSlop}>
              <Image
                  style={styles.closeButtonImage}
                  source={R.images.cross}
              />
          </TouchableOpacity>
      </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    modal: {
        backgroundColor: R.styles.colors.bg,
        borderRadius: 16,
        paddingHorizontal: 28,
        paddingTop: 21,
        paddingBottom: 26,
        marginHorizontal: 16,
        alignItems: "stretch",
        flex: 0,
        width: 320,
    },
    scrollableContainer: {
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100%",
        width: "100%",
    },
    closeButton: {
        alignSelf: "flex-end",
        paddingRight: 0,
        paddingTop: 0,
        marginTop: -4,
        marginRight: -12,
    },
    closeButtonImage: {
        width: 20,
        height: 20,
    },
    selector: {
        alignItems: 'flex-start',
        marginBottom: 18,
        marginTop: 24,
        width: "100%",
    },
    radioWrapper: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 16,
    },
    radioText: {
        ...R.styles.fonts.normal,
        color: R.styles.colors.text,
        marginLeft: 8,
    },
});