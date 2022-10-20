import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image, KeyboardAvoidingView, StyleSheet, Alert } from "react-native";
import { useSelector, useDispatch } from 'react-redux';

import R from "../../R";
import store, { counterSlice } from '../../store';
import Radio from "../controls/Radio";
import Button from "../controls/Button";
import { TStoreState, TLang } from "../../typing";


export function SelectLanguageModal(props: {closeButtonPressHandler?: () => void}) {
    const lang = useSelector((state: TStoreState) => state.counter.lang);
    const [selectedLang, setSelectedLand] = useState(null as TLang);
    const dispatch: typeof store.dispatch = useDispatch();

    useEffect(() => {
        if(selectedLang === null) {
            setSelectedLand(lang);
        }
    }, [lang, selectedLang])

    function chooseLanguage(value: string) {
        setSelectedLand(value as TLang);
    }

    function handleSaveLang() {
        dispatch(counterSlice.actions.setLang(selectedLang));
        dispatch(counterSlice.actions.storeLang());
        
        if(props.closeButtonPressHandler) {
            props.closeButtonPressHandler();
        }
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

            <View>
                <Button onPress={handleSaveLang}>{R.strings.save}</Button>
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