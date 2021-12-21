import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import RecipeList from "../components/RecipeList";

function Home({navigation}) {
  return (
    <RecipeList nav={navigation}/>
  )
}

export default Home;