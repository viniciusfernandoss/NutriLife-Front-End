import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import LoginScreen from '../screens/LoginScreen'; 

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="Sair" options={{ title: 'Sair' }} component={LoginScreen} />  
  </Drawer.Navigator>
);

export default DrawerNavigator;
