import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  form: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textInput: {
    backgroundColor: "#fff",
    height: 50,
    width: "85%",
    borderWidth: 1,
    borderColor: "#21a3d0",
    color: "#21a3d0",
    borderRadius: 50,
    padding: 10,
    fontSize: 18,
  },
  button: {
    height: 40,
    width: 40,
    backgroundColor: "#21a3d0",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  textButton: {
    color: "#fff",
    fontSize: 24,
  },
});

export default styles;
