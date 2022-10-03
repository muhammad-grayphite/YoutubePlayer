import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const FilterCard = (props) => {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
                style={{
                    width: 300,
                    height: 150
                }}
            />
            <View style={styles.content}>
                <Text>Xaheres</Text>
            </View>
        </View>
    )
}
export default FilterCard

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    content: {
        flex: 1,
        backgroundColor: 'red',
    }
})