import React, { useContext } from "react";

import { View, StyleSheet, Text, ActivityIndicator} from 'react-native';
import MapView, {Circle, Polyline} from 'react-native-maps';
import { Context as LocationContext } from "../../context/LocationContext"; 

const Map = (props)=>{
    const {state :{currentLocation, locations}} = useContext(LocationContext);
    if (currentLocation == null){
        return <ActivityIndicator size="large" style ={{marginTop:200}} />;
    } 
      return (<MapView 
        style ={ styles.mapControl}
        initialRegion={{
            ...currentLocation.coords,
            longitudeDelta : 0.01,
            latitudeDelta : 0.01,
        }}
        region={{
            ...currentLocation.coords,
            longitudeDelta : 0.01,
            latitudeDelta : 0.01,

        }}
        >
            <Circle 
                center={currentLocation.coords}
                radius={30}
                strokeColor="rgba(158,158,255,1.0)"
                fillColor="rgba(158,158,255,0.3)"
            />
            {locations.length > 0?
            <Polyline coordinates = {locations.map(loc=> loc.coords )} />
             :
             null}
        </MapView>
        );

};


const styles = StyleSheet.create({

    mapControl :{
        height:300,
    }
});

export default Map;