import React from "react";
import "react-native-gesture-handler";
import {  NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { navigationRef } from "./src/navigation/RootNavigation";

import { ThemeContext } from "./src/context/ThemeContext";
import DarkTheme from "./src/theme/dark";
import LightTheme from "./src/theme/light";

import HomeScreen from "./src/pages/Home";
import AboutScreen from "./src/pages/About";
import ModalScreen from "./src/pages/Modal";

function MainStackScreen({ navigation }) {
  const MainStack = createStackNavigator();
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Home" component={HomeScreen} />
      <MainStack.Screen name="About" component={AboutScreen} />
    </MainStack.Navigator>
  );
}

export default function App() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const RootStack = createStackNavigator();

  const switchTheme = React.useCallback(() => {
    setIsDarkMode(!isDarkMode);
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={switchTheme}>
      <NavigationContainer
        ref={navigationRef}
        theme={isDarkMode ? DarkTheme : LightTheme}
      >
        <RootStack.Navigator mode="modal">
          <RootStack.Screen
            name="Main"
            component={MainStackScreen}
            options={{ headerShown: false }}
          />
          <RootStack.Screen name="MyModal" component={ModalScreen} />
        </RootStack.Navigator>
      </NavigationContainer>
    </ThemeContext.Provider>
  );
}
