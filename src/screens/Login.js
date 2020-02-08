import React, { memo, useCallback, useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';

import api from '../services/api'
import logo from '../assets/images/logo.png';

export default memo(({ navigation: { navigate } }) => {
    const [username, setUsername] = useState('');

    const onSubmit = useCallback(async () => {
        const { data: { _id: id } } = await api.post('/devs', { username });

        navigate('main', { id });
    }, [navigate]);

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: '#f5f5f5',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 30,
            }}>
            <Image source={logo} />
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Digite seu usuário no GitHub"
                style={{
                    marginTop: 20,
                    paddingHorizontal: 15,
                    height: 45,
                    alignSelf: 'stretch',
                    backgroundColor: '#fff',
                    borderWidth: 1,
                    borderColor: '#ddd',
                    borderRadius: 4,
                }}
                value={username}
                onChangeText={setUsername}
            />
            <TouchableOpacity
                onPress={onSubmit}
                style={{
                    marginTop: 10,
                    height: 45,
                    alignSelf: 'stretch',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#DF3723',
                    borderRadius: 4,
                }}>
                <Text
                    style={{
                        color: '#fff',
                        fontWeight: 'bold',
                        fontSize: 16,
                    }}>
                    ENTRAR
        </Text>
            </TouchableOpacity>
        </View>
    );
});
