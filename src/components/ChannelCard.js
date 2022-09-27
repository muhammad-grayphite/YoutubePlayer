import React from "react";
import { View, Text, Pressable, Image, StyleSheet } from "react-native";

const ChannelCard = (props) => {
    const { handleshowMore, showmore ,item } = props

    let tags = item?.snippet?.tags
    let snippet = item?.snippet
    return (
        <>
            <View style={[styles.row_space_between]}>
                <View style={styles.row2}>
                    <Image
                        source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
                        style={styles.channelIcon}
                    />
                    <View style={{ marginLeft: 30 }}>
                        <Text>{snippet?.channelTitle}</Text>
                        <Text style={styles.smallText}>12.2M subscribers</Text>
                    </View>

                </View>

                <Pressable style={styles.subscribed}>
                    <Text>SUBSCRIBED</Text>
                </Pressable>
            </View>
            <View style={{ marginLeft: 55, marginTop: 30 }}>
                <Text style={styles.mediumText}>{snippet?.title}</Text>

                {showmore ?
                    <View style={styles.marginTop20}>
                        <Text style={{ textAlign: 'left' }}>{snippet?.description}</Text>
                        {/* <Text style={{ textAlign: 'left' }}>عمران ریاض خان کا تجزیہ</Text> */}

                        {/* <Text style={{ ...styles.marginTop20, ...styles.blueText }}>#IshaqDar #ShehbazSharif #ImranRiazKhan #ImranKhan</Text> */}

                        <View style={[styles.row2, { marginTop: 20 }]}>
                            <Text style={styles.marginRight10}>Like us on Facebook:</Text><Text style={styles.blueText}> https://web.facebook.com/ImranRiazKhan2</Text>
                        </View>

                        <View style={[styles.row2, { marginTop: 20 }]}>
                            <Text style={styles.marginRight10}>Subscribe to our Channel:</Text><Text style={styles.blueText}> https://tinyurl.com/yzb4msvj</Text>
                        </View>

                        <View style={[styles.row2, { marginTop: 20 }]}>
                            <Text style={styles.marginRight10}>Follow us on Twitter:</Text><Text style={styles.blueText}>https://www.twitter.com/ImranRiazKhan</Text>
                        </View>
                    </View> : null}


                <View style={{ marginTop: 20 }}>
                    <Pressable onPress={handleshowMore}>
                        <Text style={styles.showMore}>{showmore ? 'SHOW LESS' : 'SHOW MORE'}</Text>
                    </Pressable>
                </View>
            </View>
        </>
    )
}

export default ChannelCard

const styles = StyleSheet.create({
    row_space_between: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    row2: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    channelIcon: {
        width: 25,
        height: 25
    },
    smallText: {
        color: "grey",
        fontSize: 12,
    },
    subscribed: {
        backgroundColor: '#D3D3D3',
        padding: 8,

    },
    mediumText:{
        color:'black',
        fontSize:14,
        fontWeight:"600",
    },
    showMore:{
        color:'grey',
        fontSize:12,
        fontWeight:'500',
    },
    marginTop20:{
        marginTop:20
    },
    marginRight10:{
        marginRight:10
    },
    blueText:{
        color:'blue',
        fontSize:12,
        fontWeight:'500',
       },
})