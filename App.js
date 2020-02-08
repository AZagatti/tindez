import React from 'react';
import { SafeAreaView, View, Text, Image, TextInput } from 'react-native';

import logo from './src/assets/images/logo.png';

export default () => (
  <SafeAreaView style={
    {
      flex: 1,
      backgroundColor: '#f5f5f5',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 30
    }
  }>
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
  </SafeAreaView>
)