import React, {useContext} from "react";
import {StyleSheet, ActivityIndicator} from "react-native";
import MapView from "react-native-maps";
import {Context as LocationContext} from "../context/LocationContext"

const Map=()=>{
    const {state:{currentLocation}} =useContext(LocationContext);
    
    if (!currentLocation || !currentLocation.coords){    return <ActivityIndicator size="large" style={{marginTop:200}}/>    }

    console.log(currentLocation);
    return <MapView 
        style={styles.map}
        initialRegion={{
            ...currentLocation.coords,
            latitudeDelta:0.01,
            longitudeDelta:0.01
        }}
        region={{
            ...currentLocation.coords,
            latitudeDelta:0.01,
            longitudeDelta:0.01
        }}
        />
};

const styles=StyleSheet.create({
    map:{
        height:300
    }
});

export default Map;