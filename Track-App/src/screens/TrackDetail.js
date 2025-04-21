import React, { useContext } from "react";
import { useRoute } from "@react-navigation/native";
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';
import {Context as TrackContext} from '../context/TrackContext';
import MapView,{Polyline} from "react-native-maps";

const TrackDetail = (props)=>{
    const {state} = useContext(TrackContext);

    const route = useRoute();
    const {id} = route.params;
    let track = state.find((t)=> t._id == id);
    console.log(track);
    let initialCoords = track.locations[0].coords;

    return(
        <View>
            <Text h2> {track.name} </Text>
            <MapView 
                style ={styles.mapContainer}
                initialRegion={
                {
                    longitudeDelta : 0.01,
                    latitudeDelta : 0.01,
                    ...initialCoords
                }

            }>
                <Polyline  coordinates={track.locations.map((loc)=> loc.coords)} />
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    mapContainer :{
        height : 300
    }

});

export default TrackDetail;