import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [nome, setNome] = useState("");
  const [input, setInput] = useState("");

  function entrar() {
    if (input === "") {
      alert("Digite seu nome!");
      return;
    }

    setNome(`Bem vindo ${input}`);
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        onChangeText={(text) => setInput(text)}
      />

      <Button title="Entrar" onPress={entrar} />
      <Text style={styles.texto}>{nome}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: "row",
    justifyContent: "center",
    // alignItems: "center",
  },
  input: {
    height: 45,
    borderWidth: 1,
    margin: 10,
    padding: 10,
    fontSize: 20,
  },
  texto: {
    textAlign: "center",
    fontSize: 20,
    marginTop: 15,
  },
});
