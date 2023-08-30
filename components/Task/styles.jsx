import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  item: {
    marginVertical: 5,
    backgroundColor: "#ffffff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    flexDirection: "row",
    gap: 20,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  itemNumber: {
    width: 50,
    height: 50,
    borderRadius: 10,
    
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },

  textItemNumber: {
    color: "#ffffff",
    fontSize: 16,
  },

  textItemContent: {
    fontSize: 18,
    width: "80%",
  },
});

export default styles;
