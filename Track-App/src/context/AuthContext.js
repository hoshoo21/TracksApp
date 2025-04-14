import AsyncStorage from '@react-native-async-storage/async-storage';
import CreateDataContext from "./createDataContext";
import trackerAPI from "../apihelper/trackerAPI";

const authReducer = (state, action) => {
    console.log('reducer got:', action);
    switch (action?.type) {
        case 'signup_success':
            return { ...state, isSignedIn: true, errorMessage: '', token : action.payload };   
              
        case 'signup_error':
                return { ...state, isSignedIn:false, errorMessage: action.payload}; 
            
        default:
            return state;
    }
};

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
            const resp = await trackerAPI.post("/singin", { email:  email, password: password });
            await AsyncStorage.setItem('token',resp.data.token);
            dispatch({type:'signup_success',payload:resp.data.token})
            console.log(resp); 
           } catch (error) {
            dispatch({type:'signup_error', payload : "Email Aldready Exists"});
            console.log(error.response.data);
         }            
  
    };
};

const SignOut = (dispatch) => {
    return ({ email, password }) => {
        // SignOut logic here
    };
};

export const { Provider, Context } = CreateDataContext(
    authReducer, 
    { SignUp,SignIn }, 
    { token: null, errorMessage : '' }
);
