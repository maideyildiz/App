import React, { useContext } from 'react'
import { View, Text, StyleSheet, Button } from "react-native";
import AuthContext from './Context';

function SignUp({navigation}){
    const { signUp } = useContext(AuthContext);
  
    return (
      <View>
        <Button title="Üye Ol" onPress={() => signUp()} />
        <Button title="Giriş Yap" onPress={() => navigation.push("Login")} />
      </View>
    );
  };
  export default SignUp