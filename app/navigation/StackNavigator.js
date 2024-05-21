import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from '../screens/LoginScreen';
import RegistroScreen from '../screens/RegistroScreen';
import HomeScreen from '../screens/HomeScreen';
import MetasScreen from '../screens/MetasScreen';

const Stack = createStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator initialRouteName="Login">
    <Stack.Screen name="Registro" options={{ title: 'Registro' }} component={RegistroScreen} />
    <Stack.Screen name="Login" options={{ title: 'Login' }} component={LoginScreen} />
    <Stack.Screen name="Home" options={{ title: 'Home' }} component={HomeScreen} />
    <Stack.Screen name="Metas" options={{ title: 'Metas' }} component={MetasScreen} />
  </Stack.Navigator>
);

export default StackNavigator;
