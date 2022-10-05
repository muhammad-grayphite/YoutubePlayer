import React from "react";
import { View, Text, Image, StyleSheet, TextInput, Pressable } from "react-native";

const Comments = (props) => {

    const {
        showReplyBox,
        hideReplyBox,
        selected_Index,
        item, index,
    } = props;

    const comment = item?.snippet?.topLevelComment?.snippet;

    return (comment?.textDisplay &&
        <View
            key={Math.random()}
            style={{ marginTop: 20 }}>
            <View style={styles.row2}>
                <Image
                    source={{ uri: comment?.authorProfileImageUrl }}
                    style={styles.channelIcon}
                />
                <View style={[styles.Left20, { flex: 1 }]}>
                    <Text style={{ fontSize: 14, fontWeight: '700' }}>{comment?.authorDisplayName}</Text>
                    <Text style={{ marginTop: 5 }}>{comment?.textDisplay}</Text>
                </View>
            </View>

            <View style={{ marginLeft: 42, marginTop: 10 }}>
                <View style={[styles.row2]}>
                    <Text>Like</Text>
                    <Text style={styles.Left20}>DisLike</Text>
                    <Pressable onPress={showReplyBox}>
                        <Text style={styles.Left20}>Reply</Text>
                    </Pressable>
                </View>
                {selected_Index === index ?
                    <>
                        <View style={[styles.row2, { marginTop: 20 }]}>
                            <Image
                                source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
                                style={styles.channelIcon2}
                            />
                            <TextInput
                                placeholder='Add comment'
                                style={{ flex: 1, marginLeft: 20, borderBottomColor: '#D3D3D3', borderBottomWidth: 1 }}
                            />
                        </View>

                        <View style={[styles.row_space_between, { marginTop: 10 }]}>
                            <Text style={{ marginLeft: 40 }}>emoji</Text>
                            <View style={styles.row2}>
                                <Pressable onPress={hideReplyBox}>
                                    <Text style={{ marginRight: 20, }}>Cancel</Text>
                                </Pressable>
                                <Pressable style={styles.subscribed}>
                                    <Text>REPLY</Text>
                                </Pressable>
                            </View>
                        </View>
                    </> : null}
            </View>
        </View>
    );
};
export default Comments;

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        marginHorizontal: 20,
    },
    row2: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    row_space_between: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    channelIcon: {
        width: 25,
        height: 25,
        alignSelf: 'flex-start',
    },
    Left20: {
        marginLeft: 20
    },
    channelIcon2: {
        width: 15,
        height: 15,
        alignSelf: 'flex-start',
    },
    subscribed: {
        backgroundColor: '#D3D3D3',
        padding: 8,

    }
});