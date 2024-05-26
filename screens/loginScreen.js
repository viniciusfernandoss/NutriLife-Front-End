import React from "react";
import { View, Text, TextInput, Button, Image, StyleSheet, TouchableOpacity } from "react-native";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: '../assets/logos/logoLogin.png' }} style={styles.logo} />
      <Text style={styles.title}>Entre na sua conta</Text>

      <View style={styles.form}>
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} placeholder="Digite o seu email aqui" />

        <Text style={styles.label}>Senha</Text>
        <TextInput style={styles.input} placeholder="Digite a sua senha aqui" secureTextEntry />

        <Button title="Entrar" onPress={() => { /* handle login */ }} />
      </View>

      <Text style={styles.footerText}>Não tem uma conta?</Text>
      <TouchableOpacity onPress={() => { /* navigate to signup screen */ }}>
        <Text style={styles.link}>Crie uma conta agora!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  form: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  footerText: {
    fontSize: 14,
    color: '#666',
  },
  link: {
    fontSize: 14,
    color: '#007BFF',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
