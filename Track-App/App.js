import React, {useContext, useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './src/Navigation';
import {Context as AuthContext, Provider as AuthProvider} from './src/context/AuthContext';
import { Context as LocationContext, Provider as LocationProvider } from './src/context/LocationContext';
import {Provider as TrackProvider} from './src/context/TrackContext';
export default function App() {
  useEffect(() => {
    console.log("App mounted");
 
  }, []);      
  return (
      <TrackProvider>
          <LocationProvider >
            <AuthProvider>
              <Navigation/>
            </AuthProvider>
        </LocationProvider>
      
      </TrackProvider>
      
    
    
    
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
