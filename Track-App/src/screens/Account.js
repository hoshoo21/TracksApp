import React, { useContext } from "react";
import {View, Text,StyleSheet} from 'react-native';
import { Button } from "react-native-elements";
import Spacer from "./components/Spacer";
import {Context as AuthContext} from "../context/AuthContext";
const Account =(props)=>{
    const {SignOut} = useContext(AuthContext);
    
    const hanldeSignOut= async ()=>{
        console.log('before signout');
      
        await  SignOut();
        console.log('after signout');
    }
    
    return (
        <>
         <Text style ={{fontSize:24, justifyContent:'center'}}> Account  </Text>
          <Spacer>
             <Button title="Sign Out"  onPress={()=> hanldeSignOut()}/>
         </Spacer>  

        </>
       
    );
}

const styles = StyleSheet.create({});

export default Account;