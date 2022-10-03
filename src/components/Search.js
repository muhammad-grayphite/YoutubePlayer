import React from "react";
import { View, Text, TextInput, StyleSheet, Image, Pressable } from "react-native";
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { black, red } from "../constants/colors";

const SearchBar = (props) => {
  const { onChangeText, searchText, handleSearchPress } = props
  return (
    <View style={styles.wraper}>
      <View style={styles.leftView}>
        <Feather
          name="menu"
          style={styles.iconStyle}
        />
        <FontAwesome
          name="youtube-play"
          style={[styles.iconStyle, { color: red, marginLeft: 20 }]}
        />
        <Text style={styles.youTubeText}>YouTube</Text>
      </View>
      <View style={styles.middleView}>
        <TextInput
          placeholder="Search"
          onChangeText={onChangeText}
          value={searchText}
          style={styles.inputText}
        />
        <Pressable
          onPress={handleSearchPress}
          style={styles.seachIconView}>
          <EvilIcons
            name="search"
            style={[styles.iconStyle, { fontSize: 35, color: '#D3D3D3' }]}
          />
        </Pressable>
      </View>

      <View style={[styles.leftView, { justifyContent: 'flex-end', }]}>
        <Ionicons
          name="md-videocam-outline"
          style={styles.iconStyle}
        />
        <View>
          <EvilIcons
            name="bell"
            style={[styles.iconStyle, { marginHorizontal: 20, }]}
          />
          <View style={styles.badgeView}>
            <Text>9+</Text>
          </View>
        </View>
        <View style={styles.imgView}>
          <Image
            source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
            style={{ width: null, height: null, flex: 1 }}
          />
        </View>
      </View>

    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  wraper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginHorizontal: 10,
    height: 50,
  },
  leftView: {
    flexDirection: 'row',
    flex: 0.3,
    alignItems: 'center',
  },
  middleView: {
    flex: 0.4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconStyle: {
    fontSize: 30,
    color: black
  },
  youTubeText: {
    color: black,
    fontSize: 20,
    fontWeight: '600',
    marginLeft: 5,
  },
  inputText: {
    borderRadius: 2,
    borderColor: "grey",
    borderWidth: 1,
    flex: 1,
    padding: 10
  },
  seachIconView: {
    paddingHorizontal: 10,
    borderTopRightRadius: 2,
    borderBottomRightRadius: 2,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    paddingVertical: 3.25,
  },

  IconView: {
    padding: 11,
    backgroundColor: "#777",
    borderRadius: 3
  },
  imgView: {
    width: 30,
    height: 30,
    borderRadius: 30,
    overflow: 'hidden',
  },
  badgeView: {
    backgroundColor: 'red',
    position: 'absolute',
    zIndex: 1,
    width: 25,
    borderRadius: 10,
    left: 30,
    top: -7,
    alignItems: 'center',
  }
});
