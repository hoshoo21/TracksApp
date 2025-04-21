import React, {useEffect, useState, useRef} from 'react';
import * as Location from 'expo-location';
export default (startTracking, callBack)=>{
    const [errMsg, setErrMsg]= useState('');
    const [permissionStatus, setPemissionStatus]= useState('');
    const [location, setLocation] = useState(null);
    const locationSubscription = useRef(null);
    const getPermissions =async()=>{
       
        try{
          
            let {status}= await Location.requestForegroundPermissionsAsync();
            locationSubscription.current=  await Location.watchPositionAsync({
                accuracy:Location.Accuracy.BestForNavigation,
                timeInterval : 1000,
                distanceInterval:10,

            }, (location)=>{
                callBack(location);
            });
            console.log(status);
            if (status){
                setPemissionStatus(status);
                setErrMsg("permsission granted");
            }
            if (status !="granted"){
                setErrMsg("Access to location was denied");    
                return false;

            }
            return true;
        }
        catch(error){

        }
    };
    const startWatching =async()=>{
          
            const hasPemissions = await getPermissions();       
            console.log('start watching' + hasPemissions);
            if (!hasPemissions){
                return;
            }
            try {
                
                let currentLocation = await Location.getCurrentPositionAsync({});
                setLocation(currentLocation);

            }
            catch(error){
                setErrMsg("Error Fetching Location"+ error.message);
            }
    }

    useEffect(()=>{
        console.log("start tracking" + startTracking);
        if (startTracking){       
            startWatching();
        }
        else 
        {
            if (locationSubscription.current) {
                locationSubscription.current.remove();
                locationSubscription.current = null;
                console.log('Stopped watching location');
              }
        }
        return () => {
            if (locationSubscription.current) {
              locationSubscription.current.remove();
              locationSubscription.current = null;
            }
          };
    },
    [startTracking,callBack]);
    return [errMsg];
}