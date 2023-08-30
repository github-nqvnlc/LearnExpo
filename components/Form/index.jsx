import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import React, { useState } from "react";

import styles from "./styles";

const Input = (props) => {
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.length === 0) {
      return alert("You need to write something!");
    }
    props.addTask(task);
    setTask("");
    Keyboard.dismiss();
  };
  return (
    <View style={styles.form}>
      <TextInput
        value={task}
        onChangeText={(text) => setTask(text)}
        style={styles.textInput}
        placeholder="Write your task!"
      />
      <TouchableOpacity onPress={addTask}>
        <View style={styles.button}>
          <Text style={styles.textButton}>+</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Input;
