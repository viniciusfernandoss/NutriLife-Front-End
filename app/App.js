//rotas
import React from "react";

//dependências
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

//screens


const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
      <Stack.Screen nome="Registro" options={{title: ''}} component={} />
      <Stack.Screen nome="Login" options={{title: ''}} component={} />
      <Stack.Screen nome="Home" options={{title: ''}} component={} />
      <Stack.Screen nome="Metas" options={{title: ''}} component={} />
      </Stack.Navigator>

      <Drawer.Navigator>
        <Drawer.Screen nome="Sair" options={{title: ''}} component={} />  
      </Drawer.Navigator>

      <BottomTab.Navigator>
        <BottomTab.Screen nome="Home" options={{title: ''}} component={}/>
        <BottomTab.Screen nome="CriarRef" options={{title: ''}} component={}/>
        <BottomTab.Screen nome="MostrarRef" options={{title: ''}} component={}/>
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}

export default App;