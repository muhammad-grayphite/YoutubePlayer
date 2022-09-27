import React from "react";
import { View, Text,Pressable, StyleSheet } from "react-native";
import moment from "moment";
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';
import { Menu, MenuItem, MenuDivider } from "react-native-material-menu";


const DetailCard = (props) => {
    const{isMenuVisible , hideMenu , showMenu ,item} = props
    let tags = item?.snippet?.tags
    let snippet = item?.snippet
    let statistics = item?.statistics
    let date = moment(snippet?.publishedAt).format("MM/DD/YYYY");
    // console.log('item is', item)

    return (
        <>
            <View style={styles.titleView}>
                {tags?.map((tag,indes)=>{
                    return(
                        <View style={{flexDirection:'row',}}>
                          <Text style={styles.blueText}>{`#${tag} `}</Text>
                        </View>
                    )
                })
                }
                <Text style={styles.largeText}>{snippet?.title}</Text>
            </View>
            <View style={[styles.row_space_between, { marginTop: 10 }]}>
                <View style={styles.row2}>
                    <Text style={styles.viewsText}>{`${statistics?.viewCount} views ${date} `}</Text>
                </View>

                <View style={styles.row2}>
                    <View style={{ ...styles.row2, marginRight: 20 }}>
                        <AntDesign
                            name="like2"
                            color={'black'}
                            size={20}
                        />
                        <Text style={styles.boldText}>{statistics?.likeCount}</Text>
                    </View>

                    <View style={{ ...styles.row2, marginRight: 20 }}>
                        <AntDesign
                            name="dislike2"
                            color={'black'}
                            size={20}
                        />
                        <Text style={styles.boldText}>DISLIKE</Text>
                    </View>

                    <View style={{ ...styles.row2, marginRight: 20 }}>
                        <Entypo
                            name="add-to-list"
                            color={'black'}
                            size={20}
                        />
                        <Text style={styles.boldText}>SHARE</Text>
                    </View>
                    <Pressable
                        onPress={() => {
                            isMenuVisible ?
                                hideMenu() :
                                showMenu()
                        }}>
                        <Feather
                            name="more-horizontal"
                            color={'black'}
                            size={20}
                        />
                    </Pressable>
                    <View style={{ position: 'absolute', top: 50, left: 200, right: 0 }}>
                        <Menu
                            visible={isMenuVisible}
                            onRequestClose={hideMenu}>
                            <MenuItem onPress={hideMenu}>
                                <View style={styles.row2}>
                                    <AntDesign
                                        name="flag"
                                        color={'black'}
                                        size={20}
                                    />
                                    <Text style={styles.report}>Report</Text>
                                </View>
                            </MenuItem>
                        </Menu>
                    </View>
                </View>
            </View>
        </>
    )
}
export default DetailCard

const styles = StyleSheet.create({
    titleView: {
        marginTop: 15,
    },
    blueText: {
        color: 'blue',
        fontSize: 12,
        fontWeight: '500',
    },
    largeText: {
        color: 'black',
        fontSize: 18,
        fontWeight: "500",
        marginTop: 5,
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
    viewsText:{
        color:'grey',
        fontSize:14,
    },
    boldText: {
        color: 'black',
        fontSize: 14,
        marginLeft:5,
        fontWeight: "bold",
    },
    report:{
        marginLeft:10   
     },
})


