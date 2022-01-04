import React from 'react';
import { StyleSheet, ImageBackground, Text, View } from 'react-native';

import { Actions } from 'react-native-router-flux';

import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from '../config/colors';
import ScreenPlatform from './ScreenPlatform';
import TabButton from './TabButton';

import SofaScreen from './SofaScreen';
import TableScreen from './TableScreen';
import LampScreen from './LampScreen';

export default function ItemScreen({ navigation }) {


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
                color="grey"
                onPress={() => Actions.items()}
            />
            <TabButton 
                title="Sofas"
                color="green"
                onPress={() => Actions.sofas()}
            />
            <TabButton 
                title="Tables"
                color="green"
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
                    source= {require("../assets/images/chairs-01.jpg")}
                >
                    <View style={styles.price}>
                        <Text style={styles.textB}>Roswell</Text>
                        <Text style={styles.textC}>$50</Text>
                    </View>
                </ImageBackground>
            </View>
            <View>
                <ImageBackground
                    style= {styles.chairImage}
                    source= {require("../assets/images/chairs-02.jpeg")}
                >
                    <View style={styles.price}>
                        <Text style={styles.textB}>Minimal</Text>
                        <Text style={styles.textC}>$42</Text>
                    </View>
                </ImageBackground>
            </View>
        </View>

        <View style={styles.fourthViewContainer} >
            <View>
                <ImageBackground 
                    style= {styles.chairImage}
                    source= {require("../assets/images/chairs-06.jpg")}
                >
                    <View style={styles.price}>
                        <Text style={styles.textB}>Lounge</Text>
                        <Text style={styles.textC}>$35</Text>
                    </View>
                </ImageBackground>
            </View>
            <View>
                <ImageBackground
                    style= {styles.chairImage}
                    source= {require("../assets/images/chairs-05.jpg")}
                >
                    <View style={styles.price}>
                        <Text style={styles.textB}>Velvet</Text>
                        <Text style={styles.textC}>$53</Text>
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
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 15,
    },

    chairImage: {
        width: 150,
        height: 250,
    },

    fourthViewContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 15,
        marginTop: 10,
    },

    price: {
        marginTop: 170,
    },

    textB: {
        color: colors.black,
        fontWeight: "bold",
        fontSize: 18,
        fontFamily: "serif",
        backgroundColor: colors.grey,
        width: 85,
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
