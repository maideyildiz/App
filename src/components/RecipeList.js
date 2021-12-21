import React from "react";
import { ScrollView, View, Text, FlatList, Image,StyleSheet ,TouchableOpacity} from "react-native";
import { useState, useEffect } from "react/cjs/react.development";
import { fireDB } from "../../firebase";
import SingleRecipe from "./SingleRecipe";

function RecipeList(props) {

  const handleDetails = () => {
    navigation.navigate("RecipeDetails");
  };

  const [recipes, setRecipes] = useState();

  useEffect(() => {
    fetchMyRecipes();
  }, []);
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
  return (
    <ScrollView>
      {recipes.map((recipe, index) => (
        // <TouchableOpacity style={styles.container} key={index} onPress={() => props.nav.navigate("Details", {
        //   title: recipe.Name,
        //   time:recipe.Time,
        //   person:recipe.Person,
        //   materials:recipe.Materials,
        //   pre:recipe.Preparation
        // })}>
        //     <Image style={styles.image} source={{ uri:"https://img.icons8.com/external-becris-lineal-color-becris/64/000000/external-dish-ketogenic-diet-becris-lineal-color-becris.png" }} />
        //     <View style={styles.container_right}>
        //         <Text style={styles.title}>{recipe.Name}</Text>
        //         <Text style={styles.time}>Kaç kişilik: {recipe.Person}</Text>
        //         <Text style={styles.time}>Hazırlama süresi: {recipe.Time}</Text>
        //     </View>
        // </TouchableOpacity>
        <SingleRecipe key={index} rec={recipe} lnk={props.nav}/>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: "#B2EA70",
      marginVertical: 10,
      marginHorizontal: 5,
      borderRadius: 10,
      padding: 10,
      flexDirection: "row",
      padding: 12,
  },
  image: {
      width: 70,
      height: 70,
      marginRight: 10,
      borderRadius: 10,
  },
  title: {
      fontSize: 15,
  },
  time: {
      color: "#555"
  }
});


export default RecipeList;
