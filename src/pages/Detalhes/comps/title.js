import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function Title(props) {
    return (
        <Text style={[this_style.title]}>
            {props.title}
        </Text>
    )
}

const this_style = StyleSheet.create({
    title: {
        textAlign: 'center',
        paddingRight: 60,
        paddingLeft: 60,
        marginBottom: 15,
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white'
    }
});
