import * as Location from "expo-location";

const tenMetersWithDegrees=0.001;

const getLocation=increment=>{
    const latCentre=40.9316678;
    const longCentre=14.433171;
    const xSpiral=(i)=>{
        let angle=0.1*i;
        return latCentre+(1+angle)*Math.cos(angle)*tenMetersWithDegrees;
    }
    const ySpiral=(i)=>{
        let angle=0.1*i;
        return longCentre+(1+angle)*Math.sin(angle)*tenMetersWithDegrees;
    }
    return {
        timestamp:10000000,
        coords:{
            speed:0,
            heading:0,
            accuracy:5,
            altitudeAccuracy:5,
            altitude:5,
            latitude: xSpiral(increment),
            longitude: ySpiral(increment),
        }
    }
}

let counter=0;

setInterval(()=>{
    Location.EventEmitter.emit("Expo.locationChanged", {
        watchId:Location._getCurrentWatchId(),
        location:getLocation(counter)
    });
    counter++;
},1000)
