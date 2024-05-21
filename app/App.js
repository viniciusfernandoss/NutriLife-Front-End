import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from './navigation/StackNavigator';
import DrawerNavigator from './navigation/DrawerNavigator';
import BottomTabNavigator from './navigation/BottomTabNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
      <DrawerNavigator />
      <BottomTabNavigator />
    </NavigationContainer>
  );
}

export default App;
