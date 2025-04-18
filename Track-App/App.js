import React, {useContext, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './src/Navigation';
import {Context as AuthContext, Provider as AuthProvider} from './src/context/AuthContext';
import { Context as LocationContext, Provider as LocationProvider } from './src/context/LocationContext';

export default function App() {
          
  return (
    <LocationProvider >
        <AuthProvider>
        <Navigation/>
      </AuthProvider>
    </LocationProvider>
    
    
    
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
