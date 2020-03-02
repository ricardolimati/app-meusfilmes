import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { Ionicons, MaterialIcons, AntDesign } from '@expo/vector-icons';


const Filmes = ({ navigation }) => ({
  render() {
    let trailer;
    if (navigation.state.params.filme.trailer) {
      trailer =             
        <TouchableOpacity style={styles.filmButton} onPress={() => Linking.openURL(navigation.state.params.filme.trailer)}>
          <Ionicons name="logo-youtube" size={32} color="red" />
          <Text style={styles.filmButtonText}>Trailer</Text>
        </TouchableOpacity>;
    }
      return (
        <View style={styles.containerfilme}>
          <Image
            style={styles.filmeBanner}
            source={{ uri: navigation.state.params.filme.images.fanart }}
          />
          <View style={styles.filmeContent}>
            <Text style={styles.title}><Text style={styles.tituloNegrito}>Título:</Text>{navigation.state.params.filme.title}
            </Text>
            <Text style={styles.title}>
              <Text style={styles.tituloNegrito}>Ano de Produção:</Text> {navigation.state.params.filme.year}
            </Text>
            <Text style={styles.title}>
              <Text style={styles.tituloNegrito}>Genero:</Text> {navigation.state.params.filme.genres.map(function (gen) { return gen + " / " })}
            </Text>
            <Text style={styles.tituloNegrito}>Sinopse:</Text>
            <Text style={styles.synopsis}>{navigation.state.params.filme.synopsis}</Text>
          </View>
          <View style={styles.icones}>
            {trailer}
            <TouchableOpacity style={styles.filmButton}
              onPress={() => { }}>
              <MaterialIcons name="favorite" size={32} color="gray" />
              <Text style={styles.filmButtonText}>Add</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filmButton}
              onPress={() => { }}>
              <AntDesign name="checkcircleo" size={32} color="gray" />
              <Text style={styles.filmButtonText}>Já vi</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filmButton}
              onPress={() => { }}>
              <AntDesign name="pluscircleo" size={32} color="gray" />
              <Text style={styles.filmButtonText}>Ver</Text>
            </TouchableOpacity>
          </View>
        </View>
      )
    //}
  }
});

Filmes.navigationOptions = ({ navigation }) => ({
  title: navigation.state.params.filme.title
});

const styles = StyleSheet.create({
  containerfilme: {
    flexDirection: 'column',
    padding: 5,
    backgroundColor: '#FFF',
    borderColor: "#DDD",
    borderRadius: 5,
    padding: 5,
    marginBottom: 15
  },
  filmeContent: {
    paddingTop: 5,
  },
  filmeBanner: {
    width: '100%',
    height: 280,
    backgroundColor: '#ff4040',
  },
  title: {
    height: 30,
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  synopsis: {
    minHeight: 50,
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  tituloNegrito: {
    marginRight: 50,
    fontWeight: 'bold',
  },
  webview: {
    width: 300,
    height: 300,
  },
  filmButton: {
    height: 42,
    width: 50,
    borderRadius: 5,
    //borderWidth: 2,
    //borderColor: '#e50914',
    backgroundColor: 'transparent',
    lineHeight: 24,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filmButtonText: {
    fontSize: 16,
    color: '#010',
    fontWeight: 'bold',
  },
  icones: {
    flexDirection: 'row',
  }


});

export default Filmes;