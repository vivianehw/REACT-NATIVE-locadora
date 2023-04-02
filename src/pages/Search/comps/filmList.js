import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import styles from '../../styles';
import imgBaseUrl from '../../../services/imgBaseUrl';

export default function FilmList(props) {
    const item = props.item;
    const navigation = useNavigation();

    function verDetalhes() {

        navigation.navigate('Detalhes', {
            title: item.title,
            released: item.release_date,
            rated: item.vote_average,
            poster: `${imgBaseUrl}w300${item.poster_path}`,
            genre: item.genre_ids,
            plot: item.overview,
        })
    }

    if (item === undefined || item === '') {
        return (
            <View></View>
        )
    } else {
        return (
            <TouchableOpacity
                onPress={verDetalhes}
            >
                <Image
                    style={styles.posterImgSmaller}
                    source={item.poster_path !== null
                        ? {uri: `${imgBaseUrl}w300${item.poster_path}`}
                        : {uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png'}
                    }
                />
            </TouchableOpacity>
        )
    }
}
