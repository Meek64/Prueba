import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AsyncStorage04 = () => {
    const [nombre, setNombre] = useState('');
    const [cedula, setCedula] = useState('');
    const [storedData, setStoredData] = useState([]);

    useEffect(() => {
        readData();
    }, []);

    const storeData = async () => {
        const newData = { nombre, cedula };
        const updatedData = [...storedData, newData];
        await AsyncStorage.setItem('data', JSON.stringify(updatedData));
        setStoredData(updatedData);
    };

    const readData = async () => {
        const storedDataString = await AsyncStorage.getItem('data');
        if (storedDataString) {
            setStoredData(JSON.parse(storedDataString));
        }
    };

    const updateData = async (index) => {
        const updatedData = [...storedData];
        updatedData[index] = { nombre, cedula };
        await AsyncStorage.setItem('data', JSON.stringify(updatedData));
        setStoredData(updatedData);
    };

    const deleteData = async (index) => {
        const updatedData = storedData.filter((_, i) => i !== index);
        await AsyncStorage.setItem('data', JSON.stringify(updatedData));
        setStoredData(updatedData);
    };

    return (
        <View>
            <Text>Nombre</Text>
            <TextInput
                placeholder="Ingrese nombre"
                value={nombre}
                onChangeText={setNombre}
            />
            <Text>Cédula</Text>
            <TextInput
                placeholder="Ingrese cédula"
                value={cedula}
                onChangeText={setCedula}
            />
            <Button title="Crear/Actualizar" onPress={storeData} />
            <FlatList
                data={storedData}
                renderItem={({ item, index }) => (
                    <View>
                        <Text>{item.nombre} - {item.cedula}</Text>
                        <TouchableOpacity onPress={() => updateData(index)}>
                            <Text>Actualizar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => deleteData(index)}>
                            <Text>Eliminar</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
};

export default AsyncStorage04;