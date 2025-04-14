import React, { useContext } from "react";
import {View, Text,StyleSheet, Button, TouchableOpacity} from 'react-native';
import {Text as RNEText} from 'react-native-elements';
import Credentials from "./components/Credentials";
import {Context as AuthContext} from "../context/AuthContext";
import Spacer from "./components/Spacer";


const SignUp =(props)=>{
    const {state, SignUp} = useContext(AuthContext);
    
    const handleSignup = (user) => {
        SignUp({ email: user.email, password: user.password});
    }
    const hanldeNavigation = ()=>{
        props.navigation.navigate("SignIn");    
    }
    console.log(state);
    return (
        <View style ={styles.mainContainer}>
        
            <Credentials {...props}
             titleText=  "Sing up to tracker App"
             ButtonText=  "SingUp"
             linkText = "Already have an Account? Sign in"
             onSubmit = {handleSignup}   
             onNavigate= {hanldeNavigation}
             errorMessage = {state.errorMessage} />
            
          
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer :{
        flexGrow :1,
        justifyContent :'center',
    },
    
});

export default SignUp;