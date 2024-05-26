import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//screens
import HomeScreen from '../screens/HomeScreen';
import CriarRefScreen from '../screens/CriarRefScreen';
import MostrarRefScreen from '../screens/MostrarRefScreen';

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => (
  <BottomTab.Navigator>
    <BottomTab.Screen name="Home" options={{ title: 'Home' }} component={HomeScreen} />
    <BottomTab.Screen name="CriarRef" options={{ title: 'Criar Ref' }} component={CriarRefScreen} />
    <BottomTab.Screen name="MostrarRef" options={{ title: 'Mostrar Ref' }} component={MostrarRefScreen} />
  </BottomTab.Navigator>
);

export default BottomTabNavigator;
