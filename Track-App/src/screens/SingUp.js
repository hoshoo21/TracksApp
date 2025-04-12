import React, { useContext } from "react";
import {View, Text,StyleSheet, Button} from 'react-native';
import {Text as RNEText} from 'react-native-elements';
import Credentials from "./components/Credentials";
import {Context as AuthContext} from "../context/AuthContext";
import Spacer from "./components/Spacer";


const SignUp =(props)=>{
    const {state, SignUp} = useContext(AuthContext);
    
    const handleSignup = (user) => {
        SignUp({ email: user.email, password: user.password});
    }
    console.log(state);
    return (
        <View style ={styles.mainContainer}>
        
            <Credentials onSubmit = {handleSignup}  errorMessage = {state.errorMessage} />
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