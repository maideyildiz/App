import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

import SignUp from "./SignUp";
import Home from "./Home";
import AddRecipe from "./AddRecipe";
import Profile from "./Profile";
import About from "./About";

const AuthStack = createStackNavigator();
const MainStack = createBottomTabNavigator();
const MainStackScreen = () => (
  <MainStack.Navigator
    screenOptions={{
      header: () => null,
    }}
  >
    <MainStack.Screen
      name="Home"
      component={Home}
      options={{ title: "Anasayfa" }}
    />
    <MainStack.Screen
      name="Tarif Ekle"
      component={AddRecipe}
      options={{ title: "Tarif Ekle" }}
    />
  </MainStack.Navigator>
);
const DrawStack = createDrawerNavigator();
const DrawStackScreen = () => (
  <DrawStack.Navigator>
    <DrawStack.Screen
      name="Anasayfa"
      component={MainStackScreen}
      options={{ title: "Anasayfa" }}
    />
    <DrawStack.Screen
      name="Profile"
      component={Profile}
      options={{ title: "Profil" }}
    />
    <DrawStack.Screen
      name="About"
      component={About}
      options={{ title: "Hakkında" }}
    />
  </DrawStack.Navigator>
);

function Navigations() {
  return (
    <NavigationContainer>
      <AuthStack.Navigator
        initialRouteName={SignUp}
        screenOptions={{
          header: () => null,
        }}
      >
        <AuthStack.Screen
          name="SignUp"
          component={SignUp}
          options={{ title: "Kayıt Ol" }}
        />
        <AuthStack.Screen
          name="Home"
          component={DrawStackScreen}
          options={{ title: "Anasayfa" }}
        />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}

export default Navigations;
