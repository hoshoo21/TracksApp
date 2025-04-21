import createDataContext from "./createDataContext";
import instance from "../apihelper/trackerAPI";

const trackReducer =(state,action)=>{

    switch(action.type){
        case "List_Tracks":
           
            return action.payload;
        case "Create_Tack":
            return state;
        
        default:
        return state;
    }
};

const listTracks =(dispatch)=>{
    return async (name, locations)=>{
        const response= await instance.get('/tracks');
        dispatch({type:'List_Tracks', payload:response.data});
    }
}
const createTrack =(dispatch)=>{
    return async (name, locations)=>{
        
        instance.post("/tracks", {name, locations});
    }
}

export const {Provider, Context} = createDataContext(trackReducer,
    {listTracks,createTrack},
    {}
);

