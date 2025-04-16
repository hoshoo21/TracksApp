import React, { useCallback, useContext } from "react";
import { View, StyleSheet } from 'react-native';
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import Credentials from "./components/Credentials";
import { Context as AuthContext } from "../context/AuthContext";

const SignUp = (props) => {
    const navigation = useNavigation();
    const { state, SignUp, clearErrorMessage } = useContext(AuthContext);

    useFocusEffect(
        useCallback(() => {
            return () => {
                clearErrorMessage(); 
            };
        }, [])
    );

    const handleSignup = (user) => {
        SignUp({ email: user.email, password: user.password });
    };

    const handleNavigation = () => {
        props.navigation.navigate("SignIn");
    };

    return (
        <View style={styles.mainContainer}>
            <Credentials
                {...props}
                titleText="Sign up to Tracker App"
                ButtonText="Sign Up"
                linkText="Already have an account? Sign in"
                onSubmit={handleSignup}
                onNavigate={handleNavigation}
                errorMessage={state.errorMessage}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flexGrow: 1,
        justifyContent: 'center',
    },
});

export default SignUp;
