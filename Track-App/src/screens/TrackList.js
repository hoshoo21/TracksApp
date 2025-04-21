import React, { useContext, useEffect, useRef } from "react";
import {View, Text,StyleSheet, Button, FlatList, TouchableOpacity} from 'react-native';
import {  useIsFocused } from '@react-navigation/native';
import {Context as TrackContext} from '../context/TrackContext';
import { ListItem, Icon } from "react-native-elements";

const TrackList=(props)=>{

    const {state, listTracks} = useContext(TrackContext);

    const isFocused = useIsFocused();
    const hasFetched = useRef(false); 
    console.log(isFocused);
    useEffect(()=>{
        const fetchTracksOnce = async ()=> {
                await listTracks();
                console.log("Tracks" + JSON.stringify(state.length));


         
        }
        if(isFocused && hasFetched.current ==false ){
      
            fetchTracksOnce();
        }
    
        else 
        {
            if (!isFocused ){
                hasFetched.current = false;
            }
        }
    },
    [isFocused]);
    return (
    <View>
        <Text> TrackList</Text>
        <FlatList 
            data={state}
            keyExtractor={item => item._id }
            renderItem={({item})=>(
            
             <ListItem bottomDivider onPress={() => {console.log(item._id)}}>
                 <Icon name="map" type="feather" color="#517fa4" />  
                <ListItem.Content>
                      <ListItem.Title>{item.name}</ListItem.Title>
                </ListItem.Content>
              </ListItem>
             )}    
        />
    </View>
    );
}


const styles = StyleSheet.create({});

export default TrackList;