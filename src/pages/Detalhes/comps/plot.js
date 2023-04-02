import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Plot(props) {
    return (
        <View style={this_style.txtArea}>
            <Text style={this_style.txt1}>Sipnose</Text>
            <Text style={this_style.txt2}>{props.plot}</Text>
        </View>
    )
}

const this_style = StyleSheet.create({
    // AREA //
    txtArea: {
        width: '100%',
        padding: 10,
        marginBottom: 5
    },

    // TEXTO //
    txt1: {
        textAlign: 'left',
        marginBottom: 5,
        fontSize: 22,
        fontWeight: '500',
        color: 'white'
    },
    txt2: {
        textAlign: 'justify',
        fontSize: 18,
        color: 'white'
    }
});
