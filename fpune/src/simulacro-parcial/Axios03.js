import React, { useEffect, useState } from 'react';
import { Text, View, FlatList } from 'react-native';
import axios from 'axios';

const Axios03 = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    const renderItem = ({ item }) => (
        <View>
            <Text>{item.name}</Text>
            <Text>{item.email}</Text>
        </View>
    );

    return (
        <View>
            <Text>Lista de Usuarios:</Text>
            <FlatList
                data={users}
                renderItem={renderItem}
            />
        </View>
    );
};

export default Axios03;