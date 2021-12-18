//Push Notification unutma
import React from "react";
import { useState } from "react/cjs/react.development";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  Button,
} from "react-native";
import { fireDB } from "../../firebase";

function RecipeForm() {
  const [Name, changeName] = useState();
  const [Materials, changeMaterials] = useState();
  const [Time, changeTime] = useState();
  const [Person, changePerson] = useState();
  const [Preparation, changePreparation] = useState();
  const addRecipe = async () => {
    fireDB.collection("Tarifler").add({
      Name,
      Materials,
      Time,
      Person,
      Preparation,
    });
  };
  return (
    <SafeAreaView>
      <Text>Tarif İsmi</Text>
      <TextInput style={styles.input} onChangeText={(val) => changeName(val)} />
      <Text>Malzemeler</Text>
      <TextInput
        multiline
        style={styles.input}
        onChangeText={(val) => changeMaterials(val)}
      />
      <Text>Kaç kişilik?</Text>
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        onChangeText={(val) => changePerson(val)}
      />
      <Text>Hazırlanma süresi</Text>
      <TextInput style={styles.input} onChangeText={(val) => changeTime(val)} />
      <Text>Hazırlanışı</Text>
      <TextInput
        multiline
        style={styles.input}
        onChangeText={(val) => changePreparation(val)}
      />
      <Button title="Tarifi Kaydet" onPress={addRecipe} />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
export default RecipeForm;
