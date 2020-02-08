import React from 'react';
import { SafeAreaView, View, Text, Image, TextInput, TouchableOpacity } from 'react-native';

import logo from './src/assets/images/logo.png';

export default () => (
  <SafeAreaView style={
    {
      flex: 1,
    }
  }>

    <View style={
      {
        flex: 1,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30
      }}>

      <Image source={logo} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Digite seu usuário no Github..."
        style={{
          marginTop: 20,
          paddingHorizontal: 15,
          height: 45,
          alignSelf: 'stretch',
          backgroundColor: '#FFF',
          borderWidth: 1,
          borderColor: '#ddd',
          borderRadius: 4,
        }}
      />
      <TouchableOpacity
        style={{
          marginTop: 10,
          height: 45,
          alignSelf: 'stretch',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#DF3723',
          borderRadius: 4,
        }}
      >
        <Text style={{
          color: '#FFF',
          fontWeight: 'bold',
          fontSize: 16
        }}>ENTRAR</Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
)