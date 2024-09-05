import React from 'react';
import { Text, View } from 'react-native';

const Props02 = ({ route }) => {
    const { inputText } = route.params;

    return (
        <View>
            <Text>Propiedades recibidas:</Text>
            <Text>Nombre: {inputText}</Text>
            <Text>Estado: false</Text>
        </View>
    );
};

export default Props02;