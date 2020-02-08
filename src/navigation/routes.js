import React, { useMemo } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/Login'
import Main from '../screens/Main'

const { Navigator, Screen } = createStackNavigator();

export default () => {
    const options = useMemo(() => ({ headerShown: false }), []);

    return (
        <NavigationContainer>
            <Navigator>
                <Screen name="login" component={Login} options={options} />
                <Screen name="main" component={Main} options={options} />
            </Navigator>
        </NavigationContainer>
    )
}
