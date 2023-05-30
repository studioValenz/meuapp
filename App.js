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
    fontSize: 30,
    backgroundColor: "black",
  },
  red: {
    height: 65,
    backgroundColor: "#121212",
  },
  green: {
    flex: 1,
    backgroundColor: "#ddd",
  },
  yellow: {
    height: 65,
    backgroundColor: "#121212",
  },
});
