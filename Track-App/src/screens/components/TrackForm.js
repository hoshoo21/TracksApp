import React from "react";

import {Input, Button} from 'react-native-elements';
import Spacer from "./Spacer";

const TrackForm =(props)=>{

    return (<>
        <Spacer>
            <Input placeholder="Enter Track Description" 
                
            />
       </Spacer>
            <Button title = "Start Recording" />
        
    </>)
}

export default TrackForm;