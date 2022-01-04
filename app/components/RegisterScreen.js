import React, { useState } from 'react';
import { ImageBackground, TextInput, Image, ScrollView, StyleSheet, Text, View } from 'react-native';

import { Actions } from 'react-native-router-flux';

import colors from '../config/colors';
import ScreenButton from './ScreenButton';


export default function RegisterScreen() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    



    return (
        <>
        <ScrollView>
            <ImageBackground
                style={styles.backgroundImage}
                source={require("../assets/images/background-register-screen2.jpg")}
                resizeMode="cover"
            >
                <View>
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
            </ImageBackground>

            <Text style={styles.mainText} >REGISTER NOW</Text>
            <TextInput 
                maxLength={50}
                style={styles.container}
                placeholder="First Name"
                onChangeText={ (text) => setFirstName(text) }
            />

            <TextInput 
                maxLength={50}
                style={styles.container}
                placeholder="Last Name"
                onChangeText={ (text) => setLastName(text) }
            />

            <TextInput 
                maxLength={12}
                keyboardType="numeric"
                style={styles.container}
                placeholder="Phone Number"
                onChangeText={ (text) => setPhone(text) }
            />

            <TextInput 
                maxLength={20}
                keyboardType="email-address"
                style={styles.container}
                placeholder="Email"
                onChangeText={ (text) => setEmail(text) }
            />

            <TextInput 
                maxLength={50}
                secureTextEntry
                style={styles.container}
                placeholder="Password"
                onChangeText={ (text) => setPassword(text) }
            />

            <ScreenButton 
                title="REGISTER"
                color="green" 
                onPress={() => Actions.login()}
            />

            <Text>{`\n`}</Text>
            <Text>{`\n`}</Text>
        </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    backgroundImage: {
        width: "100%",
        height: 300,
    },

    imageContainer: {
        width: "50%",
        marginTop: -22,
        marginLeft: "37%",
    },

    logo: {
        width: "40%",
        resizeMode: "contain",
        borderRadius: 50,
    },

    textContainer: {
        width: "56%",
        marginTop: -50,
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

    mainText: {
        fontSize: 30,
        alignSelf: "center",
        marginVertical: 30,
        color: colors.green,
    },

    container: {
        width: "90%",
        height: 50,
        backgroundColor: colors.grey,
        borderRadius: 20,
        paddingHorizontal: 20,
        alignSelf: "center",
        marginVertical: 20,
    },
});
