import React, { memo } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

import logo from '../assets/images/logo.png';

const Main = memo(({ navigation: { goBack } }) => {
  return (
    <View style={{
      flex: 1,
      backgroundColor: '#f5f5f5',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 30
    }}>
      <TouchableOpacity onPress={goBack}>
        <Image source={logo} />
      </TouchableOpacity>

      <View
        style={{
          borderWidth: 1,
          borderColor: '#DDD',
          borderRadius: 8,
          margin: 30,
        }}>
        <Image
          style={{
            height: 300,
            width: 300,
          }}
          source={null}
        />
        <View
          style={{
            paddingHorizontal: 20,
            paddingVertical: 15,
            borderRadius: 8,
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: '#333',
            }}>
            Maykon Michel
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: '#999',
              marginTop: 5,
              lineHeight: 18,
            }}
            numberOfLines={3}>
            ez.developer
          </Text>
        </View>
      </View>
    </View>
  )
});

export default Main;
