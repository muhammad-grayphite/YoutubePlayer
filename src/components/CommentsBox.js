import React from "react";
import { View, Text, TextInput,Pressable, Image, StyleSheet } from "react-native";

const CommentsBox = () => {
    return (
        <>
            <View style={[styles.row2, { marginTop: 20 }]}>
                <Image
                    source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
                    style={styles.channelIcon}
                />
                <TextInput
                    placeholder='Add comment'
                    style={styles.inputStyle}
                />
            </View>
            <View style={[styles.row_space_between, { marginTop: 10 }]}>
                <Text style={{ marginLeft: 40 }}>emoji</Text>
                <View style={styles.row2}>
                    <Text style={{ marginRight: 20, }}>Cancel</Text>
                    <Pressable style={styles.subscribed}>
                        <Text>COMMENT</Text>
                    </Pressable>
                </View>
            </View>
        </>
    )
}
export default CommentsBox

const styles = StyleSheet.create({
    channelIcon: {
        width: 25,
        height: 25
    },
    row_space_between: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    row2: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    subscribed: {
        backgroundColor: '#D3D3D3',
        padding: 8,

    },
    inputStyle:{ 
        flex: 1, marginLeft: 20, 
        borderBottomColor: '#D3D3D3', 
        borderBottomWidth: 1 , paddingVertical:10,
         paddingLeft:10 
    }
})