import React, { useContext } from "react";

import {Input, Button} from 'react-native-elements';
import Spacer from "./Spacer";
import {Context as LocationContext} from '../../context/LocationContext';
import useSaveTrack from "../../hooks/useSaveTrack";
import { useNavigation } from "@react-navigation/native";
const TrackForm =(props)=>{
    const locationContext = useContext(LocationContext);
    const startRecording = locationContext?.startRecording;
    const stopRecording = locationContext?.stopRecording;

    const navigation = useNavigation();
    
    const changeName = locationContext?.changeName;
    const name = locationContext?.state?.name||'';
    const recording =locationContext?.state?.recording|| false; 
    const locations =locationContext?.state?.locations|| [];
    const [saveTrack] = useSaveTrack();
    const handleRecording = ()=>{
          saveTrack(()=>{
            console.log ("navigating to main list");
            console.log(props);
            navigation.navigate("TrackListFlow");
          })
    }
    return (<>
        <Spacer>
            <Input placeholder="Enter Track Description" 
               value = {name} 
               onChangeText={(newName)=>{ changeName(newName);}}
            />
       </Spacer>
       <Spacer>
        
            {
                recording?
            
                    <Button title ="Stop" onPress={()=>{stopRecording();}} />            
                    :<Button title = "Start Recording" onPress={()=>startRecording()} />
        
            } 
        </Spacer>
        {
                recording && locations.length >0 ?
                <Spacer>
                    <Button title="Save Recording " onPress={handleRecording} />
                </Spacer>: null
        }
            
        
    </>
    );
}

export default TrackForm;