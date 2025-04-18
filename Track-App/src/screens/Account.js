import React, { useContext } from "react";
import {View, Text,StyleSheet} from 'react-native';
import { Button } from "react-native-elements";
import Spacer from "./components/Spacer";
import {Context as AuthContext} from "../context/AuthContext";
import { SafeAreaView } from "react-native-safe-area-context";
const Account =(props)=>{
    const {SignOut} = useContext(AuthContext);
    
    const hanldeSignOut= async ()=>{
        console.log('before signout');
      
        await  SignOut();
        console.log('after signout');
    }
    
    return (
        <SafeAreaView forceInset ={{top:'always'}}>
         <Text style ={{fontSize:24, justifyContent:'center'}}> Account  </Text>
          <Spacer>
             <Button title="Sign Out"  onPress={()=> hanldeSignOut()}/>
         </Spacer>  

        </SafeAreaView>
       
    );
}

const styles = StyleSheet.create({});

export default Account;