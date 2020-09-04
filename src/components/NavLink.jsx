import React from "react";
import { StyleSheet, TouchableOpacity} from "react-native";
import {Text} from "react-native-elements";
import Spacer from "../components/Spacer";
import {withNavigation} from "react-navigation";

const NavLink=({navigation,routeName,text})=>{
    return <TouchableOpacity onPress={()=>navigation.navigate({routeName})}>
            <Spacer/>
            <Text style={styles.link}>{text}</Text>
        </TouchableOpacity>
 
}

const styles=StyleSheet.create({
    link:{
        color:"blue"
    }
});

export default withNavigation(NavLink);