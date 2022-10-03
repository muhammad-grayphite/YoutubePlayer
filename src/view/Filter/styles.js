import React from "react";
import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        padding: 8,
        flex: 1,
    },
    outerView: {
        // maxWidth: '80%',
        // justifyContent: 'center',
        // alignItems: "center",
        // alignSelf: 'center',
        flexDirection: 'row',
        backgroundColor: 'red',
        flexWrap: "wrap",
        flex: 1,
    },
    sideMenu: {
        width: 250,
        height: Dimensions.get('window').height,
        backgroundColor: "green",
    }
})

export default styles