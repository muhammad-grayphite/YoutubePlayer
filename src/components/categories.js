import React from "react";
import {View, Text, StyleSheet} from "react-native";

const Categories = () => {
  return (
    <View style={styles.wraper}>
      <Text style={styles.categoryView}>Categories</Text>
    </View>
  );
};
export default Categories;

const styles = StyleSheet.create({
  wraper: {
    // backgroundColor: "grey",
    padding: 5,
    borderRadius: 5
    // flexDirection: "row"
  },
  categoryView: {
    backgroundColor: "grey",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 16,
    overflow: "hidden",
    color: "white"
  }
});
