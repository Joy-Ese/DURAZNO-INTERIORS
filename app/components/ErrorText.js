import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import colors from '../config/colors';

export default function ErrorText({ children, contain = "gold" }) {
    return (
        <View>
            <Text style= {styles.errorText}>{children}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    errorText: {
        fontSize: 12,
        color: colors.black,
        fontWeight: "bold",
        fontFamily: "serif",
        marginLeft: "25%",
    },
});
