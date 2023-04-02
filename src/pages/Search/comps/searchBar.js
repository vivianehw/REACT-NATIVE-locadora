import React, { useEffect, useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, FlatList, Keyboard } from 'react-native';

import Feather from 'react-native-vector-icons/Feather';

import api from '../../../services';
import apiKey from '../../../services/apiKey';
import FilmList from './filmList';

export default function SearchBar() {

    const [text, setText] = useState('');
    const [searchData, setSearchData] = useState([]);

    async function pesquisar() {
        if (text == '') {
            setText('');
            return;
        }

        try {
            await api.get(`search/multi${apiKey}&language=pt-BR&query=${text}&page=1&include_adult=false`)
                .then((res) => {
                    setSearchData(res.data.results);
                    setText('');
                });
            setText('');
            Keyboard.dismiss();
        } catch (error) {
            console.log('ERROR: ' + error)
        }
    }

    return (
        <View>
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.iconArea}
                    onPress={pesquisar}
                >
                    <Feather name='search' color={'black'} size={18} />
                </TouchableOpacity>

                <TextInput
                    style={styles.inputArea}
                    placeholder={'Pesquisar'}
                    onChangeText={(text) => { setText(text.replace(/\s/g, '%20')) }}
                />

            </View>

            {searchData &&
                <View>
                    <FlatList
                        data={searchData}
                        renderItem={({ item }) => <FilmList item={item} />}
                        numColumns={2}
                    />
                    <FilmList searchData={searchData} />
                </View>
            }

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 5,
        padding: 5,
        width: '100%',
        flexDirection: 'row',
    },
    iconArea: {
        height: 40.7,
        width: '15%',
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#c10307'
    },
    inputArea: {
        width: '85%',
        height: 40,
        padding: 10,
        fontSize: 16,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
        backgroundColor: 'lightgray',
    },
    txt: {
        fontSize: 20,
        color: 'white'
    },
})
