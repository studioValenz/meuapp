import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.red}></View>
      <View style={styles.green}></View>
      <View style={styles.yellow}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  red: {
    height: 50,
    width: 50,
    backgroundColor: "red",
  },
  green: {
    height: 50,
    width: 50,
    backgroundColor: "green",
  },
  yellow: {
    height: 50,
    width: 50,
    backgroundColor: "yellow",
  },
});
