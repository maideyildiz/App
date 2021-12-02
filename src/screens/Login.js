import React, { useContext } from 'react'
import { View, Text, StyleSheet, Button} from "react-native";
import AuthContext from './Context';


function Login({ navigation }) {
    const {signIn} = useContext(AuthContext);
  
    return (
      <View>
        <Button title="Giriş Yap"  onPress={() => signIn()} />
        <Button
          title="Üye Ol"
          onPress={() => navigation.push("SignUp")}
        />
      </View>
    );
  };
  
export default Login;
