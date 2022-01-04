import React from 'react';
import { StyleSheet, ImageBackground, Image, Text, View } from 'react-native';

import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from '../config/colors';
import ScreenButton from './ScreenButton';

export default function AddToCart() {
    return (
        <>
        <ImageBackground 
            style={styles.backgroundImage}
            source={require("../assets/images/chairs-01.jpg")}
        >
            <View style={styles.justForColor}>
                <View style={styles.firstContainer}>
                    <Text style={styles.textB}>Roswell Chair</Text>
                    <Text style={styles.textC}>$50</Text>
                </View>

                <Text style={styles.textChairs}>Chairs</Text>

                <View style={styles.textContainer}>
                    <Text style={styles.textLorem}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Aliquam auctor nibh nisi, id interdum est auctor ornare. 
                        Morbi mattis, nisl ac malesuada tristique, turpis nulla 
                        suscipit tortor, eget faucibus sapien dui non justo.
                    </Text>
                </View>

                <View style={styles.sideBySide}>
                    <View style={styles.circleIcons}>
                        <MaterialCommunityIcons name="checkbox-blank-circle" size={22} color="gold" />
                        <MaterialCommunityIcons name="checkbox-blank-circle" size={22} color="white" />
                        <MaterialCommunityIcons name="checkbox-blank-circle" size={25} color="grey" />
                    </View>

                    <View style={styles.icon}>
                        <MaterialCommunityIcons name="minus-circle-outline" size={28} color="white" />
                        <Text style={styles.text1}>1</Text>
                        <MaterialCommunityIcons name="plus-circle-outline" size={28} color="white" />
                    </View>
                </View>

                <View style={styles.viewA} >
                    <ScreenButton 
                        color="green"
                        title="ADD TO CART"
                    />
                </View>
            </View>
        </ImageBackground>
        </>
    );
}

const styles = StyleSheet.create({
    backgroundImage: {
        width: "100%",
        height: 420,
    },

    justForColor: {
        backgroundColor: colors.black,
        paddingHorizontal: 15,
        height: 282,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: 350,
    },

    firstContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },

    textB: {
        color: colors.lightgrey,
        fontWeight: "bold",
        fontSize: 18,
        fontFamily: "serif",
        marginTop: 15,
    },

    textC: {
        color: colors.lightgrey,
        fontSize: 18,
        fontFamily: "serif",
        marginTop: 15,
    },

    textLorem: {
        color: colors.lightgrey,
        fontSize: 14,
        fontFamily: "serif",
        marginTop: 10,
    },

    textChairs: {
        color: colors.lightgrey,
        fontSize: 14,
        fontFamily: "serif",
        marginTop: 3,
    },

    viewA: {
		width: "210%",
		marginTop: -5,
	},

    sideBySide: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
    },

    icon: {
        flexDirection: "row",
    },

    circleIcons: {
        flexDirection: "row",
    },

    text1: {
        color: colors.lightgrey,
        fontWeight: "bold",
        fontSize: 18,
        fontFamily: "serif",
    },
});
