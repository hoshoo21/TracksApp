import React, {useState} from "react";
import {View,  StyleSheet,  
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    TouchableWithoutFeedback,
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
                              <Text h3> Sign Up for Tracker  </Text>
           
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
                    <Spacer >
                        <Button title = "Signup" />
                    </Spacer> 
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
    }
});

export default Credentials;