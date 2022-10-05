import React from "react";
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
    Drawer
} from '@react-navigation/drawer';
import { View, Text, Pressable, StyleSheet } from "react-native";
import Entypo from '@expo/vector-icons/Entypo';
import MI from '@expo/vector-icons/MaterialIcons'
import { black, light_grey } from "../constants/colors";

const CustomSidebarMenu = (props) => {

    return (
        <DrawerContentScrollView {...props}>
            <DrawerItem
                label={({ focused, color }) => <Text>Home</Text>}
                icon={({ focused, color }) => { return (<Entypo name="home" style={styles.iconStyle} />) }}
                onPress={() => props.navigation.closeDrawer()}
            />
            <DrawerItem
                label={({ focused, color }) => <Text>Explore</Text>}
                icon={({ focused, color }) => { return (<MI name="explore" style={styles.iconStyle} />) }}
                onPress={() => props.navigation.closeDrawer()}
            />
            <DrawerItem
                label={({ focused, color }) => <Text>Shorts</Text>}
                icon={({ focused, color }) => { return (<Entypo name="home" style={styles.iconStyle} />) }}
                onPress={() => props.navigation.closeDrawer()}

            />
            <DrawerItem
                label={({ focused, color }) => <Text>Subscriptions</Text>}
                icon={({ focused, color }) => { return (<Entypo name="home" style={styles.iconStyle} />) }}
                onPress={() => props.navigation.closeDrawer()}
            />
            <View style={styles.divider}></View>
        </DrawerContentScrollView>
    );
};
export default CustomSidebarMenu;

const styles = StyleSheet.create({
    iconStyle: {
        color: black,
        fontSize: 20,
    },
    divider: {
        width: '100%',
        height: 1,
        marginTop: 10,
        backgroundColor: light_grey
    }
});