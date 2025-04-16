import React, { useCallback, useContext } from "react";
import {View, Text,StyleSheet} from 'react-native';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import Credentials from "./components/Credentials";
import {Context as AuthContext} from "../context/AuthContext";

const SignIn = (props)=>{
    const navigation = useNavigation();
    const {state, SignIn, clearErrorMessage} = useContext(AuthContext);
    useFocusEffect(
        useCallback(()=>{
            return ()=>{
                clearErrorMessage();
            };
        },[])
    );

    const hanldeSignIn = (user) => {
        SignIn({ email: user.email, password: user.password});
    }
    const hanldeNavigation=()=>{
        props.navigation.navigate("SignUp");
    }
   return (
        <View style ={styles.mainContainer}>
            <Credentials {...props}
             titleText=  "Sing-In to tracker App"
             ButtonText=  "Sign In"
             linkText = "doesn't have account? Sign up"
             onSubmit = {hanldeSignIn}   
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

export default SignIn;