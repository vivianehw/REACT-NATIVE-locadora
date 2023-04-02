import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';

import { useRoute } from '@react-navigation/native';

import styles from '../styles';
import Title from './comps/title';
//import Genres from './comps/genres';
import OtherInfo from './comps/otherInfo'
import Plot from './comps/plot';

export default function Detalhes() {
    const route = useRoute();
    //const genreId = route.params?.genre

    return (
        <ScrollView>
            <View style={styles.container}>

                <Image
                    style={styles.posterImgSmall}
                    source={route.params?.poster !== null
                        ? {uri: route.params?.poster}
                        : {uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png'}
                    }
                />

                <Title title={route.params?.title} />

                <TouchableOpacity style={styles.btnArea}>
                    <Text style={styles.h3}>ALUGAR</Text>
                </TouchableOpacity>

                {/*<Genres genreId={genreId}/>*/}

                <OtherInfo
                    date={route.params?.released}
                    rate={route.params?.rated}
                />

                <Plot plot={route.params?.plot}/>

            </View>
        </ScrollView>

    )
}
