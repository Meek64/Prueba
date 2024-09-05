// src/simulacro-parcial/Componente01.js
import React, { useState } from 'react';
import { Text, TextInput, Button, View, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Componente01 = () => {
    const [inputText, setInputText] = useState('');
    const navigation = useNavigation();

    const data = [
        { key: '1', name: 'Props02', screen: 'Props02' },
        { key: '2', name: 'Axios03', screen: 'Axios03' },
        { key: '3', name: 'AsyncStorage04', screen: 'AsyncStorage04' },
    ];

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate(item.screen, { inputText })}>
            <Text>{item.name}</Text>
        </TouchableOpacity>
    );

    return (
        <View>
            <Text>Pantalla Principal</Text>
            <TextInput
                placeholder="Ingrese un texto"
                value={inputText}
                onChangeText={setInputText}
            />
            <FlatList
                data={data}
                renderItem={renderItem}
            />
        </View>
    );
};

export default Componente01;