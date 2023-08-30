import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eff7f8",
    justifyContent: "space-between",
  },
  bodyContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },

  textHeading: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#21a3d0",
  },

  scrollView: {
    marginTop: 20,
  },

  inputContainer: {
    bottom: 15,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
});

export default styles;
