import React from "react";
import {View, Text,StyleSheet, Button} from 'react-native';
import {Text as RNEText} from 'react-native-elements';
import Credentials from "./components/Credentials";
import Spacer from "./components/Spacer";

const SignUp =(props)=>{
    return (
        <View style ={styles.mainContainer}>
        
            <Credentials />
            <Button  title ='Go to Sign In' onPress={()=>{
                props.navigation.navigate("SignIn");
            } }></Button>
         
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer :{
        flexGrow :1,
        justifyContent :'center',
    }
});

export default SignUp;