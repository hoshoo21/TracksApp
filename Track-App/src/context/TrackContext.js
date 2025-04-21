import createDataContext from "./createDataContext";
import instance from "../apihelper/trackerAPI";

const trackReducer =(state,action)=>{

    switch(action.type){
        case "List_Tracks":
            return state;
        case "Create_Tack":
            return state;
        default:
        return state;
    }
};

const listTracks =(dispatch)=>{
    return async (name, locations)=>{
        console.log(name);
        console.log(locations.length);
    }
}
const createTrack =(dispatch)=>{
    return async (name, locations)=>{
        console.log(name);
        console.log(locations.length);
        instance.post("/tracks", {name, locations});
    }
}

export const {Provider, Context} = createDataContext(trackReducer,
    {listTracks,createTrack},
    {}
);

