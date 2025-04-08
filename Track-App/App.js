import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SingUp';
import TrackList from './src/screens/TrackList';
import TrackDetail from './src/screens/TrackDetail';
import Account from './src/screens/Account';
import TrackAdd from './src/screens/TrackAdd';
import Feather from '@expo/vector-icons/Feather';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TrackListFlow=()=>{ <Stack.Navigator screenOptions={{headerShown:false}}  initialRouteName='TrackList'>
                          <Stack.Screen name="TrackList" component={TrackList} /> 
                          <Stack.Screen name="TrackDetail" component={TrackDetail} /> 
                 
                      </Stack.Navigator>
  }

export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(false );
  const LoginFlow =   
   <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='SignIn' >
      <Stack.Screen name="SignUp" component={SignUp} /> 
      <Stack.Screen name="SignIn" component={SignIn} /> 
     </Stack.Navigator>;

  
  const TrackFlow =     
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
    
   ;
 

  return (
    <NavigationContainer>
        {isSignedIn ? 
        TrackFlow 
        : LoginFlow }
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
