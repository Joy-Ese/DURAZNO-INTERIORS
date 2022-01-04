import React, { useState } from 'react';
import { StyleSheet, ImageBackground, Image, Text, View } from 'react-native';

import { Actions } from 'react-native-router-flux';

import colors from '../config/colors';
import ScreenButton from './ScreenButton';
import ActivityIndicator from './ActivityIndicator';

export default function WelcomeScreen() {
    const [loading, setLoading] = useState(false);


    return (
        <ImageBackground 
            source= {require("../assets/images/background-welcome-screen.jpeg")}
            style= {styles.background}
        >
            <View style= {styles.firstContainer}>
                <View style= {styles.imageContainer}>
                    <Image 
                        style= {styles.logo}
                        source= {require("../assets/images/durazno-logo.png")}
                    />
                </View>
                <View style= {styles.textContainer}>
                    <Text style= {styles.textA}>DURAZNO INTERIORS</Text>
                    <Text style= {styles.textB}>your imaginations become your reality!!!</Text>
                </View>
            </View>

            <View style={styles.indicator}>
                <ActivityIndicator 
                    visible={loading} 
                    size={40} 
            />
            </View>

            <View style= {styles.buttonContainer}>
                <ScreenButton 
                    color="green"
                    title="LOGIN"
                    onPress={() => Actions.login()}
                />
                <ScreenButton 
                    color="gold"
                    title="REGISTER"
                    onPress={() => Actions.register()}
                />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        resizeMode: "cover",
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
    },

    firstContainer: {
        marginTop: 80,
    },

    imageContainer: {
        width: "50%",
        marginTop: -325,
        marginLeft: "39%",
    },

    logo: {
        width: "40%",
        resizeMode: "contain",
        borderRadius: 50,
    },

    textContainer: {
        width: "56%",
        marginTop: -200,
        marginLeft: "19%",
    },

    textA: {
        color: colors.black,
        fontWeight: "bold",
        fontSize: 17,
        fontFamily: "serif",
        marginLeft: "5%",
    },

    textB: {
        color: colors.black,
        fontStyle: "italic",
        fontSize: 12,
        fontFamily: "serif",
        textAlign: "center",
        marginLeft: "5%",
    },

    indicator: {
        marginTop: -200,
    },

    buttonContainer: {
        flexDirection: "row",
        marginTop: -120,
    },
});
