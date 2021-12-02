import React from 'react'
import { useState,useEffect,useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";



import Login from './Login';
import SignUp from './SignUp';
import Home from './Home';
import Search from './Search';
import Profile from './Profile';
import About from './About';
import AuthContext from './Context';

const AuthStack=createStackNavigator();
const MainStack=createBottomTabNavigator();
const MainStackScreen =()=>(
    <MainStack.Navigator
    screenOptions={{
        header:()=>null
    }}>
                <MainStack.Screen name="Home" component={Home} options={{title:'Anasayfa'}}/>
                <MainStack.Screen name="Search" component={Search} options={{title:'Ara'}}/>
            </MainStack.Navigator>
)
const DrawStack=createDrawerNavigator();


function Navigations() {
    const [isLoading,setIsLoading]=useState(true);
    const [userToken,setUserToken]=useState(null);

    const authContext=useMemo(()=>{
        return{
            signIn:()=>{
                setIsLoading(false);
                setUserToken('asdf');
            },
            signUp:()=>{
                setIsLoading(false);
                setUserToken('asdf');
            },
            signOut:()=>{
                setIsLoading(false);
                setUserToken(null);
            }
        }
    },[])


    useEffect(()=>{
        setTimeout(()=>{
            setIsLoading(false);
        },500);
    },[]);

    return (
        <AuthContext.Provider value={authContext}>
        <NavigationContainer>
            {userToken ? (
                <DrawStack.Navigator>
                <DrawStack.Screen name="Anasayfa" component={MainStackScreen} options={{title:'Anasayfa'}}/>
                <DrawStack.Screen name="Profile" component={Profile} options={{title:'Profil'}}/>
                <DrawStack.Screen name="About" component={About} options={{title:'Hakkında'}}/>
            </DrawStack.Navigator>
            ):(
                <AuthStack.Navigator initialRouteName={SignUp}>
            <AuthStack.Screen name="SignUp" component={SignUp} options={{title:'Kayıt Ol'}}/>
            <AuthStack.Screen name="Login" component={Login} options={{title:'Giriş Yap'}}/>
        </AuthStack.Navigator>
            )}

    </NavigationContainer>
    </AuthContext.Provider>
    )
}

export default Navigations
            
            
        {/* <AuthStack.Navigator initialRouteName={SignUp}>
            <AuthStack.Screen name="SignUp" component={SignUp} options={{title:'Kayıt Ol'}}/>
            <AuthStack.Screen name="Login" component={Login} options={{title:'Giriş Yap'}}/>
        </AuthStack.Navigator> */}