import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import Task from "./components/Task";

import styles from "./App.Styles";
import Input from "./components/Form";

export default function App() {
  const [taskList, setTaskList] = useState([]);
  const addTaskList = (task) => {
    setTaskList([...taskList, task]);
  };

  const handleDeleteItem = (index) => {
    Alert.alert("Delete Task", "Are you sure you want to delete this task?", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => {
          const newTaskList = [...taskList];
          newTaskList.splice(index, 1);
          setTaskList(newTaskList);
        },
      },
    ]);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={1}
      enabled
      style={styles.container}
    >
      <StatusBar style="dark" />
      <View style={styles.bodyContainer}>
        <Text style={styles.textHeading}>Todo List</Text>
        <ScrollView style={styles.scrollView}>
          {taskList &&
            taskList.map((item, index) => {
              return (
                <Task
                  key={index}
                  number={index + 1}
                  task={item}
                  onDeleteItem={() => handleDeleteItem(index)}
                />
              );
            })}
        </ScrollView>
      </View>
      <View style={styles.inputContainer}>
        <Input addTask={addTaskList} />
      </View>
    </KeyboardAvoidingView>
  );
}
