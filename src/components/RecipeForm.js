//Push Notification unutma
import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Text ,Button} from "react-native";

function RecipeForm() {
  const [text, onChangeText] = React.useState();
  const [number, onChangeNumber] = React.useState();

  return (
    <SafeAreaView>
      <Text>Tarif İsmi</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <Text>Malzemeler</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <Text>Kaç kişilik?</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
      />
      <Text>Hazırlanma süresi</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <Text>Hazırlanışı</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <Button buttonText="Tarifi Kaydet" ></Button>
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
