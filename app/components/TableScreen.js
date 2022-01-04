import React from 'react';
import { StyleSheet, ImageBackground, Text, View } from 'react-native';

import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Actions } from 'react-native-router-flux';

import colors from '../config/colors';
import ScreenPlatform from './ScreenPlatform';
import TabButton from './TabButton';

export default function SofaScreen() {
    return (
        <>
        <ScreenPlatform>
        <View style={styles.firstViewContainer}>
            <View>
                <Text style={styles.textA}>What item are you looking for?</Text>
            </View>
            <View>
                <MaterialCommunityIcons 
                    name="card-search-outline" 
                    size={30} 
                    color="black" 
                    style={styles.icon}
                />
            </View>
        </View>

        <View style={styles.secondViewContainer} >
            <TabButton 
                title="Chairs"
                color="green"
                onPress={() => Actions.items()}
            />
            <TabButton 
                title="Sofas"
                color="green"
                onPress={() => Actions.sofas()}
            />
            <TabButton 
                title="Tables"
                color="grey"
                onPress={() => Actions.tables()}
            />
            <TabButton 
                title="Lamps"
                color="green"
                onPress={() => Actions.lamps()}
            />
        </View>

        <View style={styles.thirdViewContainer} >
            <View>
                <ImageBackground 
                    style= {styles.chairImage}
                    source= {require("../assets/images/tables-01.webp")}
                >
                    <View style={styles.price}>
                        <Text style={styles.textB}>Table</Text>
                        <Text style={styles.textC}>$80</Text>
                    </View>
                </ImageBackground>
            </View>
            <View>
                <ImageBackground
                    style= {styles.chairImage}
                    source= {require("../assets/images/tables-02.webp")}
                >
                    <View style={styles.price}>
                        <Text style={styles.textB}>Table</Text>
                        <Text style={styles.textC}>$62</Text>
                    </View>
                </ImageBackground>
            </View>
        </View>
        </ScreenPlatform>
        </>
    );
}

const styles = StyleSheet.create({
    firstViewContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        paddingHorizontal: 15,
    },

    textA: {
        color: colors.black,
        fontWeight: "bold",
        fontSize: 19,
        fontFamily: "serif",
        width: "80%",
    },

    icon: {
        marginTop: 5,
    },

    secondViewContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        paddingHorizontal: 15,
    },

    thirdViewContainer: {
        paddingHorizontal: 15,
    },

    chairImage: {
        resizeMode: "contain",
        marginTop: 18,
    },

    price: {
        marginTop: 180,
    },

    textB: {
        color: colors.black,
        fontWeight: "bold",
        fontSize: 18,
        fontFamily: "serif",
        backgroundColor: colors.grey,
        width: 70,
        borderRadius: 5,
    },

    textC: {
        color: colors.black,
        fontSize: 16,
        fontFamily: "serif",
        backgroundColor: colors.grey,
        width: 35,
        borderRadius: 5,
    },
});
