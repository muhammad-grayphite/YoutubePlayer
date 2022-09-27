import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white'
    },
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


    playerView: {
        flex: 1,
        marginTop: 10,
    },
    player: {
        height: 100,
        width: '100%',
        backgroundColor: 'black',
    },
    video:{
        width:700,
        height:600,
    },
    blueText:{
     color:'blue',
     fontSize:12,
     fontWeight:'500',
    },
    largeText:{
      color:'black' , 
      fontSize:18,
      fontWeight:"500",
      marginTop:5,
    },
    viewsText:{
        color:'grey',
        fontSize:14,
    },
    titleView: {
        marginTop: 15,
    },
    iconStyle: {
        width: 15, height: 15,
    },
    boldText: {
        color: 'black',
        fontSize: 14,
        marginLeft:5,
        fontWeight: "bold",
    },
    list: {
        // width:'19%',
        // backgroundColor:'green'
    },
    divider: {
        width: '100%',
        height: 2,
        marginTop: 15,
        backgroundColor: "#D3D3D3"
    },
    channelNameView: {
        marginTop: 20,
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
    report:{
       marginLeft:10   
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
    }
}
)

export default styles