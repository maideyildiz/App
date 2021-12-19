import React from "react";
import { ScrollView, View, Text, FlatList, Image,YellowBox } from "react-native";
import { useState, useEffect } from "react/cjs/react.development";
import { fireDB } from "../../firebase";

function RecipeList() {
  const [recipes, setRecipes] = useState();

  useEffect(() => {
    fetchMyRecipes();
  }, []);
  YellowBox.ignoreWarnings(['Setting a timer for a log period of time'])
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

  if (!recipes)
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  console.log(recipes);
  return (
    <ScrollView>
      {recipes.map((recipe, index) => (
        <Text key={index}>
          <Image
            source={{
              uri: "https://img.icons8.com/external-becris-lineal-color-becris/64/000000/external-dish-ketogenic-diet-becris-lineal-color-becris.png",
            }}
            alt="recipe"
            resizeMode="cover"
            style={{
              width: 100,
              height: 100,
            }}
          />
          <Text h1>{recipe.Name}</Text>
          <Text>Hazırlanma süresi: {recipe.Time}</Text>
          <Text>Kaç kişilik?: {recipe.Person}</Text>
          <Text>Malzemeler: {recipe.Materials}</Text>
          <Text>Hazırlanışı: {recipe.Preparation}</Text>
        </Text>
      ))}
    </ScrollView>
  );
}

export default RecipeList;
