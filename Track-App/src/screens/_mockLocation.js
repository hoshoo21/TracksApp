import * as Location from 'expo-location';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

const tenMetersWithDegree=0.001;

const getLocation = (increment)=>{
    return {
        timeStamp : 1000000,
        coords : {
            speed : 0,
            heading : 0,
            accuracy : 5,
            altitudeAccuracy : 5,
            longitudeAccuracy : 5,
            latitude: 24.9405726+  (increment * tenMetersWithDegree),
            longitude:67.0011 + (increment * tenMetersWithDegree) ,
           
        }

    }
};

let counter = 0;
setInterval(() => {
  Location.EventEmitter.emit('Expo.locationChanged', {
    watchId: Location._getCurrentWatchId(),
    location: getLocation(counter)
  });
  counter++;
}, 10000);