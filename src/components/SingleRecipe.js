import React from "react";
import {
  ScrollView,
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useState, useEffect } from "react/cjs/react.development";

function SingleRecipe(props) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        props.lnk.navigate("Details", {
          screen: "RecipeDetails",
          params: {
            title: props.rec.Name,
            time: props.rec.Time,
            person: props.rec.Person,
            materials: props.rec.Materials,
            pre: props.rec.Preparation,
          },
        })
      }
    >
      <Image
        style={styles.image}
        source={{
          uri: "https://img.icons8.com/external-becris-lineal-color-becris/64/000000/external-dish-ketogenic-diet-becris-lineal-color-becris.png",
        }}
      />
      <View style={styles.container_right}>
        <Text style={styles.title}>{props.rec.Name}</Text>
        <Text style={styles.time}>Kaç kişilik: {props.rec.Person}</Text>
        <Text style={styles.time}>Hazırlama süresi: {props.rec.Time}</Text>
      </View>
    </TouchableOpacity>
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
    color: "#555",
  },
});
export default SingleRecipe;
