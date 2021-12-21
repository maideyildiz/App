// import { useNavigation, useRoute } from '@react-navigation/native';
// import React from 'react';
// import {View, Text, StyleSheet, ScrollView} from "react-native";

// function RecipeDetails() {
//   // const route = useRoute();
//   // const { title, time,person,materials,pre } = route.params;
//   const navigation = useNavigation();
//     const route = useRoute();
//     const {title} = route.params;
//     console.log(title)
//     return (
//   //     <ScrollView style={styles.container}>
//   //     <View style={styles.container__top}>
//   //         <Text style={styles.recipe__title}>{JSON.stringify(title)} </Text>
//   //         <Text style={styles.recipe__time}>{JSON.stringify(time)}</Text>
//   //     </View>
//   //     <View style={styles.recipe__ingredients}>
//   //         {
//   //             recipe.materials.map((ingredient=>(
//   //                 <Text style={styles.recipe__ingredient}>{ingredient}</Text>
//   //             )))
//   //         }
//   //     </View>
//   //     <View style={styles.recipe__steps}>
//   //         {
//   //             recipe.steps.map(step=>(
//   //                 <Text style={styles.recipe__step}>{JSON.stringify(pre)}</Text>
//   //             ))
//   //         }
//   //     </View>
//   // </ScrollView>
//   <Text>hello</Text>
//     )
// }
// const styles = StyleSheet.create({
//   container: {
//       flex: 1,
//       padding: 20,
//   },
//   container__top: {
//       flexDirection: "row",
//       justifyContent: "space-between",
//   },
//   recipe__title:{
//       fontWeight: "bold",
//       fontSize: 20,
//   },
//   recipe__time: {
//       color: "red",
//       fontSize: 20,
//   },
//   recipe__ingredients: {
//       marginTop: 10,
//       flexDirection: "row",
//       flexWrap: "wrap"
//   },
//   recipe__ingredient: {
//       margin: 5,
//       backgroundColor: "hsla(250, 50%, 60%, 0.5)",
//       padding: 15,
//       borderRadius: 15,
//       color: "white"
//   },
//   recipe__steps: {
//       marginTop: 15,
//   },
//   recipe__step: {
//       marginTop: 10,
//       fontSize: 20,
//       backgroundColor: "hsla(250, 50%, 60%, 0.5)",
//       borderRadius: 10,
//       padding: 15,
//       color: "black"
//   }
// });

// export default RecipeDetails

import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

function RecipeDetails({ route }) {
  const { title, time, person, materials, pre } = route.params;
  return (
    <ScrollView style={styles.container}>
        <View style={styles.container__top}>
            <Text style={styles.recipe__title}>{title}</Text>
            <Text style={styles.recipe__time}>{time}</Text>
        </View>
        <View style={styles.recipe__ingredients}>
                    <Text style={styles.recipe__ingredient}>{materials}</Text>

        </View>
        <View style={styles.recipe__steps}>

                    <Text style={styles.recipe__step}>{pre}</Text>

        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  container__top: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  recipe__title: {
    fontWeight: "bold",
    fontSize: 20,
  },
  recipe__time: {
    color: "red",
    fontSize: 20,
  },
  recipe__ingredients: {
    marginTop: 10,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  recipe__ingredient: {
    margin: 5,
    backgroundColor: "#B2EA70",
    padding: 15,
    borderRadius: 15,
    color: "white",
  },
  recipe__steps: {
    marginTop: 15,
  },
  recipe__step: {
    marginTop: 10,
    fontSize: 20,
    backgroundColor: "#B2EA70",
    borderRadius: 10,
    padding: 15,
    color: "black",
  },
});

export default RecipeDetails;
