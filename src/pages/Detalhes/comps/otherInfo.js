import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function OtherInfo(props) {
    return (
        <View>
            <View style={this_style.txtArea}>
                <Text>
                    <Text style={this_style.txt1}>Lançamento: </Text>
                    <Text style={this_style.txt2}>{props.date}</Text>
                </Text>
            </View>

            <View style={this_style.txtArea}>
                <Text>
                    <Text style={this_style.txt1}>Nota: </Text>
                    <Text style={this_style.txt2}>{props.rate}</Text>
                </Text>
            </View>
        </View>
    )
}

const this_style = StyleSheet.create({
    // AREA //
    txtArea: {
        alignItems: 'center',
        padding: 10,
        marginBottom: 10,
        borderRadius: 10,
        backgroundColor: 'rgb(25, 25, 25)'
    },

    // TEXTO //
    txt1: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '500',
        color: 'white'
    },
    txt2: {
        textAlign: 'center',
        fontSize: 20,
        color: 'white'
    }
});
