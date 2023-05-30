import React, { Component, useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [nome, setNome] = useState("Julio");
  const [idade, setIdade] = useState(32);

  function entrar(nome, idade) {
    setNome(nome);
    setIdade(idade);
  }

  return (
    <View style={styles.container}>
      <Button
        style={styles.butao}
        title="Mudar nome"
        onPress={() => entrar("Julio Anderson", 50)}
      />
      <Text style={styles.text}>{nome}</Text>
      <Text style={styles.text}>{idade}</Text>
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
  },
  butao: {
    color: "red",
  },
});
