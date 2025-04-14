import React, {useState} from "react";
import {View,  StyleSheet,  
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Keyboard } from "react-native";
import {Text,Input, Button} from 'react-native-elements';
import Spacer from "./Spacer";


const Credentials =(props)=>{
        
        const [email, setEmail] = useState('');
        const [password, setPassword]= useState('');
        return (
            <KeyboardAvoidingView
                  behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                 style={{ flex: 1 }} >
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <ScrollView
                    contentContainerStyle = {styles.mainContainer}
                    keyboardShouldPersistTaps="handled"
                    >
                       <Spacer>
                                <Text h3> {props.titleText} </Text>:
                               
                                  
                                           
                             
                     </Spacer>
                        <Input label ="Email"  
                                    value = {email}
                                    onChangeText={ (newEmail)=>{
                                            setEmail(newEmail);
                                    }}  
                                />
                    
                            <Spacer/>
                            <Input label ="Password" 
                                secureTextEntry
                                value = {password}
                                onChangeText={(newPassword)=>{
                                    setPassword(newPassword);  
                                }}
                            />
                    
                    <Spacer/>
                   
                    {props.errorMessage ? <Text style={styles.errorMessageContainer}> {props.errorMessage} </Text>: null}
                    
                    <Spacer >
                                <Button title = {props.ButtonText}
                                    onPress={()=>{
                                        props.onSubmit({email:email,password:password});}}
                                    />:
                        
                    </Spacer>
                    {   <TouchableOpacity onPress={()=>{
                         props.onNavigate();
                       }} >
                            <Text style={styles.link}> {props.linkText}</Text>
                            </TouchableOpacity>
                            
                  
                  }
                </ScrollView>
                </TouchableWithoutFeedback> 
                     
            </KeyboardAvoidingView>
    
            
            
        );

}

const styles = StyleSheet.create({
    mainContainer :{
        paddingTop: 150,
        justifyContent: 'center',
        marginBottom:200,
    },
    link :{
        color :'blue',
        alignSelf:'center',
     
       }  
     ,
    errorMessageContainer : {
        fontSize:16,
        color : "red",
        marginleft:50,
        marginTop : -50,

    }
});

export default Credentials;