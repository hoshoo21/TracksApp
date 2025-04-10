import React from "react";

import { View, StyleSheet } from "react-native";


const Spacer =({children})=>{
    return (
        <View style={styles.spacerContainer}>
            {children}
        </View>
    )

};

const styles = StyleSheet.create({
    spacerContainer :{
        margin : 15
    }
})

export default Spacer;