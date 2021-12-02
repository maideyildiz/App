import React, { useContext } from 'react'
import { View, Text, StyleSheet, Button } from "react-native";
import AuthContext from './Context';

function Profile() {
    const { signOut } = useContext(AuthContext);
  
    return (
      <View>
        <Button title="Oturumu Kapat" onPress={() => signOut()} />
      </View>
    );
}

export default Profile
