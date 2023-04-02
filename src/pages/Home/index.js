import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';

import styles from '../styles';
import api from '../../services';
import apiKey from '../../services/apiKey';

import MainCarousel from './comps/mainCarousel';
import SecCarousel from './comps/secCarousel';

export default function Home() {

  const [loading, setLoading] = useState(true);
  const [genre, setGenre] = useState([]);

  useEffect(() => {
    api.get(`genre/movie/list${apiKey}&language=pt-BR`).then((res) => {
      setGenre(res.data.genres);
      setLoading(false);
      console.log('entrou no useEffect')
      console.log(genre)
    });
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>

        <MainCarousel />

        <SecCarousel genre={'Ação'} genreId={'28'} />
        <SecCarousel genre={'Aventura'} genreId={'12'} />
        <SecCarousel genre={'Animação'} genreId={'16'} />

{/*        
        <SecCarousel genre={genre[0].name} genreId={genre[0].id} />
        <SecCarousel genre={genre[0].name} genreId={genre[0].id} />
        <SecCarousel genre={genre[1].name} genreId={genre[1].id} />
        <SecCarousel genre={genre[2].name} genreId={genre[2].id} />
        <SecCarousel genre={genre[3].name} genreId={genre[3].id} />
        <SecCarousel genre={genre[4].name} genreId={genre[4].id} />
        <SecCarousel genre={genre[5].name} genreId={genre[5].id} />
        <SecCarousel genre={genre[6].name} genreId={genre[6].id} />
        <SecCarousel genre={genre[7].name} genreId={genre[7].id} />
        <SecCarousel genre={genre[8].name} genreId={genre[8].id} />
        <SecCarousel genre={genre[9].name} genreId={genre[9].id} />
        <SecCarousel genre={genre[10].name} genreId={genre[10].id} />
        <SecCarousel genre={genre[11].name} genreId={genre[11].id} />
        <SecCarousel genre={genre[12].name} genreId={genre[12].id} />
        <SecCarousel genre={genre[13].name} genreId={genre[13].id} />
        <SecCarousel genre={genre[14].name} genreId={genre[14].id} />
        <SecCarousel genre={genre[15].name} genreId={genre[15].id} />
        <SecCarousel genre={genre[16].name} genreId={genre[16].id} />
        <SecCarousel genre={genre[17].name} genreId={genre[17].id} />
        <SecCarousel genre={genre[18].name} genreId={genre[18].id} />
  */}
      </View>
    </ScrollView>
  )
}
