import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import colors from '../config/colors';

export default function TabButton({onPress, title, color="turquoise", textColor="black"}) {
    return (
        <TouchableOpacity 
            style= { [styles.tabButton, { backgroundColor: colors[color] },] }
            onPress= {onPress}
        >
            <Text style= { styles.loginText, { color: colors[textColor] } } >
                {title}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    tabButton: {
        backgroundColor: colors.primary,
        width: "25%",
        padding: 10,
        margin: 10,
        position: "relative",
        // top: 10,
        borderRadius: 10,
        elevation: 10,
        justifyContent: "center",
        alignItems: "center",
    },

    loginText: {
        textAlign: "center",
        color: colors.white,
        fontSize: 10,
        fontWeight: "bold",
        marginTop: -8,
    },
});
