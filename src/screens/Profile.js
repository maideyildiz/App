import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { auth } from "../../firebase";

function Profile({ navigation }) {
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.navigate("SignUp");
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <View style={styles.container}>
      <Text>E-posta adresi: {auth.currentUser?.email}</Text>
      <TouchableOpacity onPress={handleSignOut} style={styles.button}>
        <Text style={styles.buttonText}>Oturumu Kapat</Text>
      </TouchableOpacity>
    </View>
  );
}
export default Profile;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
