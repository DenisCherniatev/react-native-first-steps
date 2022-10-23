import React, {useEffect, useState} from 'react';
import {View, Image, StyleSheet, Modal} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator, BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
 
import R from "./R";
import { useStoreState, useStoreActions } from "./store";
import HomeScreen from "./views/HomeScreen";
import SettingsScreen from "./views/SettingsScreen";
import AboutScreen from "./views/AboutScreen";
import { ThemeContext } from "./context";
import { SelectLanguageModal } from "./views/modals/Modals";
 
 
const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

const AppBottomTabsScreens = () => {
  const lang = useStoreState((state) => state.lang);
  
  return (
    <BottomTabs.Navigator screenOptions={{
      initialRouteName: "HomeTab",
      tabBarStyle: {
        backgroundColor: R.styles.colors.bg,
      },
      headerShown: false,
      tabBarActiveTintColor: R.styles.colors.main,
      tabBarInactiveTintColor: R.styles.colors.inactiveTab,
    } as BottomTabNavigationOptions}>
      <BottomTabs.Screen
        name={"HomeTab"}
        component={HomeScreen}
        listeners={({ navigation, route }) => ({
          tabPress: e => {
            navigation.navigate(route.name);
          },
        })}
        options={() => ({
          tabBarIcon: ({focused}) => <Image
            style={[styles.tabImage, focused ? styles.tabImageFocused : {}]}
            source={R.images.home}
          />,
          title: R.strings.home,
          tabBarOptions: {
            activeTintColor: R.styles.colors.main,
          }
        })}
      />
      <BottomTabs.Screen
        name={"SetingsTab"}
        component={SettingsScreen}
        listeners={({ navigation, route }) => ({
          tabPress: e => {
            navigation.navigate(route.name);
          },
        })}
        options={() => ({
          tabBarIcon: ({focused}) => <Image
            style={[styles.tabImage, focused ? styles.tabImageFocused : {}]}
            source={R.images.settings}
          />,
          title: R.strings.settings,
          tabBarOptions: {
            activeTintColor: R.styles.colors.main,
          }
        })}
      />
      <BottomTabs.Screen
        name={"AboutTab"}
        component={AboutScreen}
        listeners={({ navigation, route }) => ({
          tabPress: e => {
            navigation.navigate(route.name);
          },
        })}
        options={() => ({
          tabBarIcon: ({focused}) => <Image
            style={[styles.tabImage, focused ? styles.tabImageFocused : {}]}
            source={R.images.info}
          />,
          title: R.strings.about,
          tabBarOptions: {
            activeTintColor: R.styles.colors.main,
          }
        })}
      />
    </BottomTabs.Navigator>
  );
};

const AppNavigation = () => {
  const theme = useStoreState((state) => state.theme);
  const modalData = useStoreState((state) => state.modalData);
  const loadLang = useStoreActions((actions) => actions.loadLang);
  const resetModal = useStoreActions((actions) => actions.resetModal);

  useEffect(() => {
    loadLang();
  }, [])

  function handleCloseModal() {
    resetModal();
  }

  return (
    <ThemeContext.Provider value={theme}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={Object.keys(modalData).length > 0}
      >
        <View style={styles.modalOverlay}>
          <SelectLanguageModal closeButtonPressHandler={handleCloseModal} />
        </View>
      </Modal>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="BottomTabs" component={AppBottomTabsScreens} />
        </Stack.Navigator>
      </NavigationContainer>        
    </ThemeContext.Provider>
  );
};

const styles = StyleSheet.create({
  tabImage: {
    width: 32,
    height: 32,
    tintColor: R.styles.colors.inactiveTab,
  },
  tabImageFocused: {
    tintColor: R.styles.colors.main,
  },
  modalOverlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  }
});

export default AppNavigation;
 