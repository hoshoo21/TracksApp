import { useContext } from 'react';
import {Context as TrackContext} from '../context/TrackContext';
import {Context as LocationContext} from '../context/LocationContext';

export default()=>{
    const {createTrack} = useContext(TrackContext);
    const locationContext = useContext(LocationContext);
    const name  = locationContext?.state?.name || '';
    const locations  = locationContext?.state?.locations || [];
    const reset = locationContext.reset;
    const  saveTrack= async(callback)=>{
            await createTrack(name,locations);
            reset();
            if (callback){
                callback();
            }
    }
    return [saveTrack];
}
