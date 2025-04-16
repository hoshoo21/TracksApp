import AsyncStorage from '@react-native-async-storage/async-storage';
import CreateDataContext from "./createDataContext";
import trackerAPI from "../apihelper/trackerAPI";
import { useEffect } from 'react';

const authReducer = (state, action) => {
    console.log('reducer got:', action);
    switch (action?.type) {

        case 'clear_error_message':
            return {...state, errorMessage :''};
        case 'signup_success':
            return { ...state, isSignedIn: true, errorMessage: '', token : action.payload };   
        
        case "localsignin_success":
            return {errorMessage: '', token : action.payload, isLoading : false };   
           
        case 'signup_error':
                return { ...state, isSignedIn:false, errorMessage: action.payload}; 
        case 'signin_error':
            return { ...state, isSignedIn:false, errorMessage: action.payload}; 
        case 'signout_success':
            return {token:null, errorMessage : '', isLoading : false};
            
        default:
            return state;
    }
};


const tryLocalSignIn =(dispatch)=>{
    return async()=>{
        const token =  await AsyncStorage.getItem('token');
        dispatch ({type:"signout_success", payload:token });
    }
}

const clearErrorMessage =(dispatch)=>{
   return ()=>{ 
        dispatch({type :'clear_error_message'} );   
    }
}
   

const SignUp = (dispatch) => {
    return async({ email, password }) => {
        try {
            console.log(email, password);
            const resp = await trackerAPI.post("/signup", { email:  email, password: password });
            await AsyncStorage.setItem('token',resp.data.token);
            dispatch({type:'signup_success',payload:resp.data.token})
            console.log(resp); 
        } catch (error) {
            dispatch({type:'signup_error', payload : "Email Aldready Exists"});
            console.log(error.response.data);
         }            
     };
};

const SignIn = (dispatch) => {
    return  async ({ email, password }) => {
        try {
            console.log(email, password);
            const resp = await trackerAPI.post("/signin", { email:  email, password: password });
            await AsyncStorage.setItem('token',resp.data.token);
            dispatch({type:'signup_success',payload:resp.data.token})
            console.log(resp); 
           } catch (error) {
            dispatch({type:'signin_error', payload : "Email or password doesn't Exists"});
            console.log(error.response.data);
         }            
  
    };
};

const SignOut = (dispatch) => {
    return  async() => {
          try {
            await AsyncStorage.removeItemItem('token');
         
          }
          catch(error){
            console.log(error);
          }
          dispatch({type:'signout_success'});
    };
};

export const { Provider, Context } = CreateDataContext(
    authReducer, 
    { SignUp,SignIn,clearErrorMessage,SignOut, tryLocalSignIn }, 
    { token: null, errorMessage : '' }
);
