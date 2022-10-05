import React from "react";
import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        padding: 8,
        height: Dimensions.get('window').height,
    },
    outerView: {
        flexDirection: 'row',
        backgroundColor: '#F9F9F9',
        flexWrap: "wrap",
        height: Dimensions.get('window').height
    },
    sideMenu: {
        width: 250,
        height: Dimensions.get('window').height,
        backgroundColor: "green",
    }
});

export default styles;