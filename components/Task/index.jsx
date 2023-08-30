import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

import styles from "./styles";

const Task = (props) => {
  return (
    <TouchableOpacity onPress={props.onDeleteItem}>
      <View style={styles.item}>
        {props.number && props.number % 2 === 0 ? (
          <View style={[styles.itemNumber, { backgroundColor: "#55f233" }]}>
            <Text style={styles.textItemNumber}>
              {props.number && props.number < 10
                ? `0${props.number}`
                : props.number}
            </Text>
          </View>
        ) : (
          <View style={[styles.itemNumber, { backgroundColor: "#21a3d0" }]}>
            <Text style={styles.textItemNumber}>
              {props.number && props.number < 10
                ? `0${props.number}`
                : props.number}
            </Text>
          </View>
        )}

        <Text style={styles.textItemContent}>{props.task}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Task;
