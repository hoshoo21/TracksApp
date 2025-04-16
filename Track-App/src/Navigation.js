import React, {useContext, useEffect, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import TrackList from './screens/TrackList';
import TrackDetail from './screens/TrackDetail';
import Account from './screens/Account';
import TrackAdd from './screens/TrackAdd';
import Feather from '@expo/vector-icons/Feather';
import {Provider as AuthProvider, Context as AuthContext} from './context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const rootNavigation = createNativeStackNavigator();
const TrackListFlow=()=>(
    <Stack.Navigator screenOptions={{headerShown:false}}  initialRouteName='TrackList'>
                  <Stack.Screen name="TrackList" component={TrackList} /> 
                  <Stack.Screen name="TrackDetail" component={TrackDetail} /> 
         
              </Stack.Navigator>

);
const TrackFlow=()=>(

<Tab.Navigator initialRouteName='TrackListFlow'
  screenOptions={({route}) => ({
  tabBarIcon: ({ focused, color, size }) => {
  let iconName;

  if (route.name === 'TrackListFlow') {
      iconName= 'list' 
  } else if (route.name === 'TrackCreate') {
    iconName ='plus' ;
  }
  else if (route.name === 'Account') {
    iconName ='user' ;
  }

  return <Feather name={iconName} size={size} color={color} />;
},
tabBarActiveTintColor: 'tomato',
tabBarInactiveTintColor: 'gray',
})}
>
<Tab.Screen name="TrackListFlow"  component={TrackListFlow} />
<Tab.Screen name="TrackCreate" component={TrackAdd} />
<Tab.Screen name="Account" component={Account} />

</Tab.Navigator>
);
const LoginFlow =()=>(   

<Stack.Navigator  screenOptions={{headerShown:false}}  initialRouteName='SignUp' >
    <Stack.Screen name="SignUp" component={SignUp} /> 
    <Stack.Screen name="SignIn" component={SignIn} /> 
</Stack.Navigator>
);
const Navigation = ()=> {
        const { state, tryLocalSignIn } = useContext(AuthContext);
        console.log(state);
        useEffect(()=>{
            tryLocalSignIn();
        }, []);
        if (state.isLoading){
            return null;
        }
        return (
            <NavigationContainer>
                <rootNavigation.Navigator screenOptions={{headerShown:false}}  >
                    {state.token ? 
                        <rootNavigation.Screen name ="TrackFlow" component={TrackFlow}/>
                        :
                        <rootNavigation.Screen name ="LoginFlow" component={LoginFlow} />
                    }
                </rootNavigation.Navigator>
             
            </NavigationContainer>
        );
};

export default Navigation;

