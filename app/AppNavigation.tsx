import React, {ReactFragment, useEffect, useState} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator, BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
 
import R from "./R";
import HomeScreen from "./views/HomeScreen";
import OptionsScreen from "./views/OptionsScreen";
import AboutScreen from "./views/AboutScreen";
import { TStoreState } from "./typing";
import { ThemeContext } from "./context";
 
 
const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

const AppBottomTabsScreens = () => (
  <BottomTabs.Navigator screenOptions={{
    initialRouteName: "HomeTab",
    tabBarStyle: {
      backgroundColor: "#f2f4f5",
    },
    headerShown: false,
    tabBarActiveTintColor: "#5b2785",
    tabBarInactiveTintColor: "#c4c4c4",
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
        title: "Home",
        tabBarOptions: {
          activeTintColor: '#cd077d',
        }
      })}
    />
    <BottomTabs.Screen
      name={"SetingsTab"}
      component={OptionsScreen}
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
        title: "Settings",
        tabBarOptions: {
          activeTintColor: '#cd077d',
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
        title: "About",
        tabBarOptions: {
          activeTintColor: '#cd077d',
        }
      })}
    />
  </BottomTabs.Navigator>
);

const AppNavigation = () => {
  const theme = useSelector((state: TStoreState) => state.counter.theme);

   return (
      <ThemeContext.Provider value={theme}>
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
    tintColor: "#c4c4c4",
  },
  tabImageFocused: {
    tintColor: "#5b2785",
  },
});

export default AppNavigation;
 