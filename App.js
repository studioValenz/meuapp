import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default class App extends Component {
  render() {
    let nome = "Julio Anderson";
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Testando</Text>
        <Text style={{ fontSize: 30 }}>Meu primeiro app</Text>
        <Logo nome={"Anderson"} />
        <Text style={styles.text}>{nome}</Text>
      </View>
    );
  }
}

function Logo(props) {
  let img = "https://sujeitoprogramador.com/reactlogo.png";
  return (
    <View>
      <Image style={styles.img} source={{ uri: img }} />
      <Text>{props.nome}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 30,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
    color: "#254df2",
    backgroundColor: "black",
  },
  img: {
    width: 300,
    height: 300,
  },
});
