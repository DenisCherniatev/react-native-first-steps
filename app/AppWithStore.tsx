 import React, {useEffect, useState} from 'react';
 import {View} from 'react-native';
 import { useSelector } from 'react-redux';
 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 
 import HomeScreen from "../app/views/HomeScreen";
 import { TStoreState } from "../app/typing";
 import { ThemeContext } from "../app/context";
 
 
 const Stack = createNativeStackNavigator();
 
 const AppWithStore = () => {
  const theme = useSelector((state: TStoreState) => state.counter.theme);

   return (
      <ThemeContext.Provider value={theme}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
          </Stack.Navigator>
        </NavigationContainer>        
      </ThemeContext.Provider>
   );
 };
 
 export default AppWithStore;
 