import React, {useContext, useEffect, useState} from "react";
import {View, SafeAreaView, StyleSheet} from 'react-native';
import {Text, Button} from 'react-native-elements';
import * as Location from 'expo-location';
import Map from './components/Map';
import './_mockLocation';
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";
import { useIsFocused } from '@react-navigation/native';
import TrackForm from "./components/TrackForm";
const TrackAdd =(props)=>{
    const {addLocation} = useContext(LocationContext);
   const isFocused = useIsFocused();
   const [errMsg] = useLocation(isFocused, addLocation);  
   
    return (

        <SafeAreaView>
            
            <Text h3> Create a Track </Text>
            <Map/>
            <TrackForm />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({});

export default TrackAdd;