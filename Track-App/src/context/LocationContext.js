import createDataContext from "./createDataContext";


const locationReducer =(state, action)=>{

    switch (action.type){
    case "change_name":
        return {...state, name : action.payload};
    case "add_current_location":
        return {...state, currentLocation:action.payload }
     case "add_location":
            return {...state, locations: [...state.locations,action.payload] }
          
     case "start_recording":
        return {...state, recording : true};
    case "stop_recording":
        return {...state, recording : false};
    case "reset":
        return {...state, recording : false, name : '', locations:[] };      
    default:
        return state;
    }

};

const reset = (dispatch)=>{
    return ()=>{
         dispatch({type :"reset"});
    }
}

const changeName =(dispatch)=>{
    return (name)=>{
        dispatch({type:'change_name', payload: name})
    }
}
const startRecording = (dispatch)=>{
    return ()=>{
        dispatch({type:"start_recording"});
    }
};
const stopRecording =(dispatch)=>{
    return ()=>{
        dispatch({type:"stop_recording"});
    }
};

const addLocation =(dispatch)=>{
    return (location, isrecording)=>{
        dispatch({type :"add_current_location", payload:location});
        if (isrecording){
            dispatch({type :"add_location", payload:location});
        }
    }
};

export const {Context,Provider}= createDataContext(locationReducer,
    {changeName, startRecording, stopRecording,addLocation, reset},
    {name : '',recording:false, locations:[], currentLocation : null}    
);