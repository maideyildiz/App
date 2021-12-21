import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import SignUp from "./SignUp";
import Home from "./Home";
import AddRecipe from "./AddRecipe";
import Profile from "./Profile";
import About from "./About";
import RecipeDetails from "./RecipeDetails";

const AuthStack = createStackNavigator();
const DetailStack = createStackNavigator();
const DetailStackScreen = () => (
  <DetailStack.Navigator>
    <DetailStack.Screen
      name="RecipeDetails"
      component={RecipeDetails}
      options={{ title: "Tarif Detayları" }}
    />
  </DetailStack.Navigator>
);
const MainStack = createBottomTabNavigator();
const MainStackScreen = () => (
  <MainStack.Navigator
    screenOptions={{
      header: () => null,
      showLabel: false,
      style: {
        position: "absolute",
        bottom: 50,
        left: 20,
        right: 20,
        elevation: 0,
        backgroundColor: "#fffff",
        borderRadius: 15,
        height: 90,
        ...styles.shadow,
      },
    }}
  >
    <MainStack.Screen
      name="Home"
      component={Home}
      options={{
        showLabel: false,
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        tabBarIcon: ({ focused }) => (
          <View
            style={{ alignItems: "center", justifyContent: "center", top: 0 }}
          >
            <Image
              source={require("../../assets/icons/home.png")}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? "#064635" : "#748c94",
              }}
            />
          </View>
        ),
      }}
    />
    <MainStack.Screen
      name="AddRecipe"
      component={AddRecipe}
      options={{
        tabBarIcon: ({ focused }) => (
          <View
            style={{ alignItems: "center", justifyContent: "center", top: 0 }}
          >
            <Image
              source={require("../../assets/icons/add.png")}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? "#064635" : "#748c94",
              }}
            />
          </View>
        ),
      }}
    />
  </MainStack.Navigator>
);
const DrawStack = createDrawerNavigator();
const DrawStackScreen = () => (
  <DrawStack.Navigator>
    <DrawStack.Screen
      name="Anasayfa"
      component={MainStackScreen}
      options={{
        title: "Anasayfa",
        headerStyle: {
          height: 80,
        },
      }}
    />
    <DrawStack.Screen
      name="Profile"
      component={Profile}
      options={{
        title: "Profil",
        headerStyle: {
          height: 80,
        },
      }}
    />
    <DrawStack.Screen
      name="About"
      component={About}
      options={{
        title: "Hakkında",
        headerStyle: {
          height: 80,
        },
      }}
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
        <AuthStack.Screen
          name="Details"
          component={DetailStackScreen}
          options={{ title: "Tarif Detayları" }}
        />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}
export default Navigations;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
