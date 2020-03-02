import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity, KeyboardAvoidingView, Image, StyleSheet,
  TextInput, Platform
} from 'react-native';

export default class Main extends Component {

  static navigationOptions = {
    title: 'MEUS FILMES - LOGIN',
    visible: false,
  };

  render() {

    return (
      <KeyboardAvoidingView style={styles.background} behavior="padding">
        <View style={styles.containerLogo}>
          <Image
            style={styles.icon}
            source={require('../assest/icon.png')}
          />
        </View>

        <View style={styles.container}>
          <TextInput
            style={styles.inputText}
            placeholder="Email"
            autoCorrect={false}
            onChangeText={() => { }}
          />

          <TextInput
            style={styles.inputText}
            placeholder="Senha"
            autoCorrect={false}
            onChangeText={() => { }}
          />

          <TouchableOpacity style={styles.btnAcessar}>
            <Text style={styles.btnAcessarText}>Acessar</Text>
          </TouchableOpacity>

          <View style={styles.containerBtn}>
            <TouchableOpacity style={styles.btnRegister}>
              <Text style={styles.btnRegisterText}>Cadastre-se</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnEsqueci}>
              <Text style={styles.btnEsqueciText}>Esqueci a Senha</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    )
  }


}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e50914'
  },
  icon: {
    width: 102,
    height: 102,
  },
  containerLogo: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',

  },
  inputText: {
    backgroundColor: '#FFF',
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    padding: 10,
  },
  btnAcessar: {
    backgroundColor: '#35aaff',
    width: '90%',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7
  },
  btnAcessarText: {
    color: '#FFF',
    fontSize: 18,
  },
  containerBtn: {
    flex: 1,
    width: '90%',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  btnRegister: {
    marginTop: 10,
    backgroundColor: '#e50914',
    width: '50%',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7
  },
  btnRegisterText: {
    color: '#FFF',
    fontSize: 18,
  },
  btnEsqueci: {
    marginTop: 10,
    backgroundColor: '#e50914',
    width: '50%',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7
  },
  btnEsqueciText: {
    color: '#FFF',
    fontSize: 18,
  }
});