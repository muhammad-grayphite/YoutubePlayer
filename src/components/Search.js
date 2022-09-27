import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const SearchBar = () => {
  return (
    <View style={styles.wraper}>
      <Text style={styles.menu}>Menu</Text>
      <TextInput style={styles.inputText} placeholder={"Search"} />
      <View style={styles.IconView}>
        <Text>SearchIcon</Text>
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  wraper: {
    flexDirection: "row",
    alignItems: "center"
  },
  menu: {
    marginRight: 5
  },

  inputText: {
    borderRadius: 3,
    borderColor: "grey",
    borderWidth: 1,
    flex: 1,
    padding: 10
  },
  IconView: {
    padding: 11,
    backgroundColor: "#777",
    borderRadius: 3
  }
});
