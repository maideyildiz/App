//Push Notification unutma

import React from "react";
import { useState } from "react/cjs/react.development";
import {
  SafeAreaView,
  ScrollView,
  View,
  StyleSheet,
  TextInput,
  Text,
  Button,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { fireDB } from "../../firebase";
import { StatusBar } from "expo-status-bar";

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
    <ScrollView>
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.inputContainer}>
          <Text>Tarif İsmi</Text>
          <TextInput
            style={styles.input}
            onChangeText={(val) => changeName(val)}
          />
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
          <TextInput
            style={styles.input}
            onChangeText={(val) => changeTime(val)}
          />
          <Text>Hazırlanışı</Text>
          <TextInput
            multiline
            style={styles.input}
            onChangeText={(val) => changePreparation(val)}
          />
          <TouchableOpacity onPress={addRecipe}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Tarifi Kaydet</Text>
            </View>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: "80%",
  },
  button: {
    marginTop:10,
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: "#B2EA70",
  },
  buttonText: {
    color: "black",
    fontWeight: "normal",
    textTransform: "uppercase",
    fontSize: 15,
    textAlign: "center",
  },
});
export default RecipeForm;
