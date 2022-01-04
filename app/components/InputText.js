import React from 'react';
import { StyleSheet, TextInput, Text, View } from 'react-native';

import {MaterialCommunityIcons} from '@expo/vector-icons';

import colors from '../config/colors';

export default function InputText({icon, ...otherProps}) {
    return (
        <>
        <View style= {styles.textInput} >
            <Text>{`\n`}</Text>
            <Text>{`\n`}</Text>
            <MaterialCommunityIcons 
                name={icon}
                size={35}
                color="black"
            />
            <TextInput
                {...otherProps}
            />
        </View>
        </>
    );
}

const styles = StyleSheet.create({
    textInput: {
        backgroundColor: colors.grey,
        borderRadius: 20,
        paddingVertical: 5,
        flexDirection:"row",
        marginLeft: 2,
        marginTop: 50,
    }
});
