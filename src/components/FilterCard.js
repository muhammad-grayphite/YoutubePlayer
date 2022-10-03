import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import Entypo from '@expo/vector-icons/Entypo';

import { black, light_grey } from "../constants/colors";

const FilterCard = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.imgView}>
                <Image
                    source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
                    style={{
                        width: undefined,
                        height: undefined,
                        resizeMode: 'contain',
                        flex: 1
                    }}
                />
            </View>
            <View style={styles.content}>

                <View style={styles.full_flex}>
                    <Text style={[styles.title]}>Cypher is a Reality | Govt in Trouble as Preparation of Long March Begins | Imran Riaz Khan Analysis</Text>

                    <View style={[styles.row_center, { marginTop: 5 }]}>
                        <Text style={styles.smallText}>36k view </Text>
                        <Text style={[styles.smallText, { marginLeft: 5 }]}>1 day ago </Text>
                    </View>
                    <View style={[styles.row_center, { marginVertical: 15 }]}>
                        <View style={styles.smallImage}>
                            <Image
                                source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
                                style={{
                                    width: undefined,
                                    height: undefined,
                                    resizeMode: 'contain',
                                    flex: 1
                                }}
                            />
                        </View>
                        <View style={styles.full_flex}>
                            <Text style={styles.normalText}>Imran riaz</Text>
                        </View>
                    </View>
                    <View style={[styles.row_center]}>
                        <Text style={styles.blueText}>{`#${'imported'} `}</Text>
                    </View>

                    <Pressable style={styles.greyBtn}>
                        <Text style={styles.smallText}>{'New'}</Text>
                    </Pressable>
                </View>
                <View style={{ alignSelf: 'flex-start', marginHorizontal: 20, marginTop: 10 }}>
                    <Entypo
                        name="dots-three-vertical"
                        color={'black'}
                        size={20}
                    />
                </View>
            </View>

        </View>
    )
}
export default FilterCard

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1,
        backgroundColor: '#F9F9F9',
        marginBottom: 20,
    },
    imgView: {
        width: 300,
        height: 200,
        overflow: 'hidden',
        padding: 10,
        alignSelf: 'flex-start',
        // borderRadius: 10,
    },
    content: {
        flex: 1,
        marginLeft: 10,
        marginTop: 10,
        flexDirection: 'row',
        // justifyContent: 'space-between',

        // alignItems: 'center',
        // backgroundColor: 'red',
    },
    full_flex: {
        flex: 1,
    },
    title: {
        color: 'black',
        fontSize: 18,
        fontWeight: "500",
        marginTop: 5,
    },
    row_center: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    smallText: {
        fontSize: 12,
        fontWeight: '500',
        color: black
    },
    smallImage: {
        width: 30,
        height: 30,
        borderRadius: 30 / 2,
        overflow: 'hidden',

    },
    normalText: {
        color: black,
        fontSize: 14,
        fontWeight: '500',
        marginLeft: 10,
    },
    blueText: {
        color: 'blue',
        fontSize: 12,
        fontWeight: '500',
    },
    greyBtn: {
        backgroundColor: light_grey,
        padding: 3,
        width: '5%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    }
})