// https://api.themoviedb.org/3/discover/movie?api_key=9155cee6f569cf089fde3f9540513492&language=pt-BR&include_adult=false&page=1&with_genres=16

import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';

import Carousel from 'react-native-snap-carousel';
import { useNavigation } from '@react-navigation/native';

import styles from '../../styles';
import api from '../../../services';
import apiKey from '../../../services/apiKey';
import imgBaseUrl from '../../../services/imgBaseUrl';

export default function SecCarousel(props) {

    const windowWidth = Dimensions.get('window').width;
    const navigation = useNavigation();

    const [filmData, setFilmData] = useState([]);

    useEffect(() => {
        api.get(`discover/movie${apiKey}&language=pt-BR&include_adult=false&page=1&with_genres=${props.genreId}`).then((res) => {
            setFilmData(res.data.results);
        })
    }, []);

    function CarouselRender({ item, index }) {

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

        return (
            <View style={{alignItems: 'center'}} key={index}>
                <TouchableOpacity
                    onPress={verDetalhes}
                >
                    <Image
                        style={styles.posterImgSmall}
                        source={{uri: `${imgBaseUrl}w300${item.poster_path}`}}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={[styles.carouselArea, {}]}>

            <Text style={styles.h2}>{props.genre}</Text>

            <Carousel
                data={filmData}
                renderItem={CarouselRender}
                loop={true}

                sliderHeight={250}
                sliderWidth={windowWidth}
                itemWidth={styles.posterImg.width - 35}
                useScrollView={true}    
            />
        </View>
    )
}
