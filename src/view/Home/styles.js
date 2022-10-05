import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 8,
    flex: 1,
  },
  title: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  subTitle: {
    margin: 24,
    textAlign: 'center'
  },
  cardWraper: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center"
  }
});

export default styles;