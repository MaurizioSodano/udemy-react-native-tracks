import React, {useContext} from "react";
import {View, StyleSheet} from "react-native";
import {Context as AuthContext} from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SigninScreen=()=>{
    const {state,signin}=useContext(AuthContext);

    return <View style={styles.container}>
      <AuthForm 
           headerText="Sign In for Tracker"
           errorMessage={state.errorMessage}
           submitButtonText="Sign Ip"
           onSubmit={signin}
           />
       <NavLink 
           text="Dont have an account? Sign up instead"
           routeName="Signup"
           />
   </View>
};


SigninScreen.navigationOptions = () => {
    return {
      header: () => false,
    };
  };
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        marginBottom:250
    }
});

export default SigninScreen;