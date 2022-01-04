import React, { useState, useContext } from 'react';
import { ImageBackground, Image, StyleSheet, Text, View } from 'react-native';

import { Actions } from 'react-native-router-flux';

import jwtDecode from "jwt-decode";

import { Formik } from 'formik';
import * as yup from "yup";

import colors from '../config/colors';
import ScreenButton from './ScreenButton';
import InputText from './InputText';
import ErrorText from './ErrorText';

import authApi from '../api/auth';
// import AuthContext from '../auth/context';

const validationSchema = yup.object().shape({
    email: yup.string().required().email().label("Email"), 
    password: yup.string().required().min(4).max(20).label("Password"),
});

export default function LoginScreen() {
// const authContext = useContext(AuthContext)

const [user, setUser] = useState()
const [loginFailed, setLoginFailed] = useState();
const handleSubmit = async({email,password}) => {
    const result = await authApi.login(email,password);
    if (!result.ok) {
        setLoginFailed(true);
        Alert.alert(
            "Invalid Email and/or Password", 
            "Would you like to try again?", 
            [
                {
                    text: "Try Again"
                }
            ]
        );
    } else {
        setLoginFailed(false);
        const user = jwtDecode(result.data);
        console.log(user)
    }
}
    return (
        <>
        <ImageBackground 
            source= {require("../assets/images/background-login-screen3.jpg")}
            style= {styles.background}
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

            <View>
                <Text style= {styles.textInput} >INPUT LOGIN DETAILS HERE!!!</Text>
            </View>

            <Formik 
                initialValues={{ email:"", password:"" }} 
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                {({ handleChange, handleSubmit, errors })=> (
                <>
                    <InputText 
                        autoCapitalize="none" 
                        autoCorrect={false}
                        icon="email"
                        onChangeText={handleChange("email")}
                        keyboardType="email-address"
                        placeholder="Email"
                    />
                    <ErrorText>{errors.email}</ErrorText>
                    <InputText 
                        autoCapitalize="none" 
                        autoCorrect={false}
                        icon="security" 
                        keyboardType="numeric"
                        placeholder="Password"
                        secureTextEntry
                        onChangeText={handleChange("password")}
                    />
                    <ErrorText>{errors.password}</ErrorText>
                    <ScreenButton 
                        color="green" 
                        title="LOGIN" 
                        onPress={() =>{user? handleSubmit: Actions.joy()}}
                    />
                </>
                )}
            </Formik>
        </ImageBackground>
        </>
    );
}

const styles = StyleSheet.create({
    background: {
        resizeMode: "cover",
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
    },

    imageContainer: {
        width: "50%",
        marginTop: -80,
        marginLeft: "40%",
    },

    logo: {
        width: "40%",
        resizeMode: "contain",
        borderRadius: 50,
    },

    textContainer: {
        width: "56%",
        marginTop: -50,
        marginLeft: "22%",
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

    textInput: {
        color: colors.black,
        fontWeight: "bold",
        fontSize: 17,
        fontFamily: "serif",
        marginLeft: "14%",
        marginTop: 40,
        width: 270,
    },
});
