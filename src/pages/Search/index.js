import React from 'react';
import { View } from 'react-native';

import styles from '../styles';
import SearchBar from './comps/searchBar';

export default function Search() {
    return (
        <View style={styles.container}>
            <SearchBar/>
        </View>
    )
}
