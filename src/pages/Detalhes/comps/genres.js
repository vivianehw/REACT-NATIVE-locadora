import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

import api from '../../../service'
import apiKey from '../../../service/apiKey';

export default function Genres(props) {

    const [genreName, setGenreName] = useState();

    useEffect(() => {
        api.get(`genre/movie/list${apiKey}&language=pt-BR`).then((res) => {
            setGenreName(res.data.genres);
            console.log(genreName[1].name)
        })
    }, []);

    return (
        <View style={{backgroundColor: `orange`}}>

        </View>
    )
}
