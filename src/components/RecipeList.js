import React from "react";
import { ScrollView, View, Text} from "react-native";
import { useState, useEffect } from "react/cjs/react.development";
import { fireDB } from "../../firebase";
import SingleRecipe from "./SingleRecipe";

function RecipeList(props) {
  const [recipes, setRecipes] = useState();
  const fetchMyRecipes = async () => {
    const response = await fireDB.collection("Tarifler");
    const unsubscribe = response.onSnapshot(getRecipeData);
  };
  const getRecipeData = (querySnapshot) => {
    const recs = [];
    querySnapshot.forEach((res) => {
      const { Materials, Name, Person, Preparation, Time } = res.data();
      recs.push({
        Materials,
        Name,
        Person,
        Preparation,
        Time,
      });
    });
    setRecipes(recs);
  };

  useEffect(() => {
    fetchMyRecipes();
  }, []);
  if (!recipes)
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  return (
    <ScrollView>
      {recipes.map((recipe, index) => (
        <SingleRecipe key={index} rec={recipe} lnk={props.nav}/>
      ))}
    </ScrollView>
  );
}


export default RecipeList;
