import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useState,useEffect } from "react/cjs/react.development";
import { fireDB } from "../../firebase";

function RecipeList() {
    const [recipes, setRecipes] = useState();

    useEffect(() => {
      fetchMyRecipes();
    }, []);
  
    const fetchMyRecipes = async () => {
      const response = await fireDB.collection('Tarifler').
      doc('6D1ZpMGBvcXfT3AXyBWL').get();
      setRecipes(response._document.data.internalValue.root.value.internalValue);
      console.log(response._document.data.internalValue.root.value.internalValue);
    };
    if (!recipes) 
    return (
    <View>
        <Text>Loading...</Text>
        </View>
    )
  return (
    <View>
      <Text>{recipes}</Text>
    </View>
  );
}

export default RecipeList;
