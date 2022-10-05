import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import Entypo from '@expo/vector-icons/Entypo';
import moment from "moment";

import MenuList from "../components/menu";
import { black, light_grey } from "../constants/colors";

const FilterCard = (props) => {

    const { item, handlePress, select_index, hideMenu, handleMenu, index } = props
    const snippet = item?.snippet;
    let tags = item?.snippet?.tags;
    const thumbnail = item?.snippet?.thumbnails;
    let publishTime = moment(snippet?.publishedAt, 'YYYYMMDD').fromNow();

    return (
        <Pressable
            onPress={handlePress}
            style={styles.container}
        >
            <View style={styles.imgView}>
                <Image
                    source={{ uri: thumbnail?.high?.url }}
                    style={styles.imgStyle}
                />
            </View>
            <View style={styles.content}>

                <View style={styles.full_flex}>
                    <Text style={[styles.title]}>{snippet?.title}</Text>

                    <View style={[styles.row_center, { marginTop: 5 }]}>
                        <Text style={styles.smallText}>36k view </Text>
                        <Text style={[styles.smallText, { marginLeft: 5 }]}>{publishTime ? publishTime : '1 day ago'}</Text>
                    </View>
                    <View style={[styles.row_center, { marginVertical: 15 }]}>
                        <View style={styles.smallImage}>
                            <Image
                                source={{ uri: thumbnail?.default?.url }}
                                style={{
                                    width: undefined,
                                    height: undefined,
                                    flex: 1
                                }}
                            />
                        </View>
                        <View style={styles.full_flex}>
                            <Text style={styles.normalText}>{snippet?.channelTitle}</Text>
                        </View>
                    </View>
                    <View style={[styles.row_center]}>
                        <Text style={styles.blueText}>{`#${'imported'} `}</Text>
                    </View>

                    <Pressable style={styles.greyBtn}>
                        <Text style={styles.smallText}>{'New'}</Text>
                    </Pressable>
                </View>
                <Pressable
                    onPress={select_index === index ? hideMenu : handleMenu}
                    style={{ alignSelf: 'flex-start', marginHorizontal: 20, marginTop: 10 }}>
                    <Entypo
                        name="dots-three-vertical"
                        color={'black'}
                        size={20}
                    />
                </Pressable>
            </View>
            <MenuList
                select_index={select_index}
                index={index}
                hideMenu={hideMenu}
            />
        </Pressable>
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
    },
    content: {
        flex: 1,
        marginLeft: 10,
        marginTop: 10,
        flexDirection: 'row',
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
    },
    imgStyle: {
        width: undefined,
        height: undefined,
        flex: 1
    }
})