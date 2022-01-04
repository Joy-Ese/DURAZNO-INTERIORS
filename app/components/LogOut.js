import React, {useState} from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';

import YoutubePlayer from 'react-native-youtube-iframe';

import colors from '../config/colors';

import ScreenButton from './ScreenButton';
import TabButton from './TabButton';
import ScreenPlatform from './ScreenPlatform';


const LogOut = () => {
    const [playing, setPlaying] = useState(false);

    const onStateChange = (state) => {
        if (state === 'ended') {
            setPlaying(false);
            Alert.alert('THANK YOU FOR SHOPPING WITH US!!!');
        }
    }

    const togglePlaying = () => {
        setPlaying((prev) => !prev);
    }

    const successLogOut = () => {
        Alert.alert(
            "LOG OUT",
            "Would you like to log out?",
            [
                {
                    text: "NO",
                    onPress: () => console.log("NO Pressed"),
                    style: "cancel"
                },
                { 
                    text: "YES", 
                    onPress: () => console.log("YES Pressed") }
            ]
        );
    }

    return (
        <>
        <ScreenPlatform>
        <View>
            <YoutubePlayer
                height={300}
                play={playing}
                videoId={'lgEXfCNAexw'}
                onChangeState={onStateChange}
            />
            <View style={styles.viewA} >
                <ScreenButton 
                    color="grey"
                    title={playing ? 'pause' : 'play'} 
                    onPress={togglePlaying} 
                />
            </View>
        </View>
        <View style={styles.container}>
            <Text style={styles.TextA}>CLICK TO LOG OUT</Text>
            <View style={styles.viewB}>
                <TabButton 
                    title="LOG OUT"
                    color="green"
                    onPress={successLogOut} 
                />
            </View>
        </View>
        </ScreenPlatform>
        </>
    );
};

export default LogOut;

const styles = StyleSheet.create({
    viewA: {
		width: "210%",
		marginTop: -70,
	},

    container: {
        marginTop: 50,
    },

    TextA: {
        color: colors.black,
        fontWeight: "bold",
        fontSize: 30,
        fontFamily: "serif",
    },

    viewB: {
        width: "200%",
    }
});
