import React from "react";
import {View, Text,StyleSheet, Button} from 'react-native';


const TrackList=(props)=>{
    return (
    <View>
        <Text> TrackList</Text>
        <Button  title ="Go To Track Detail"
           onPress={()=>{ props.navigation.navigate ("TrackDetail"); }}
        />
    </View>
    );
}


const styles = StyleSheet.create({});

export default TrackList;