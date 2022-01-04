import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

import { Video, AVPlaybackNativeSource } from "expo-av";

import { Actions } from 'react-native-router-flux';


import colors from "../config/colors";
import video from "../assets/images/home-screen-video.mp4";
import ScreenButton from './ScreenButton';



export default function HomeScreen () {
	const [status, setStatus] = React.useState({});
	return (
		<>
		<View>
			<Video
				style={styles.videoA}
				source={video}
				shouldPlay
				resizeMode="cover"
				isLooping
				onPlaybackStatusUpdate={(status) => setStatus(() => status)}
			/>
		</View>

		<View style={styles.textContainer}>
			<Text style={styles.textA} >Your World Of Interior Design Awaits!!!</Text>
			<Text style={styles.textB} >
				We are so glad you are here! You are now a part of our growing community of Interior Designers
				who love to shop on our app.
			</Text>
			<Text style={styles.textC} >
				Whether you have joined to shop or gather ideas, we have got something for you.
			</Text>
		</View>

		<View style={styles.viewA} >
			<ScreenButton 
				color="green"
				title="CLICK TO GET STARTED"
				onPress={() => Actions.welcome()}
			/>
		</View>
		</>
	);
};


const styles = StyleSheet.create({
	videoA: {
		height: 350,
	},

	textContainer: {
		backgroundColor: colors.black,
		height: 322,
	},

	textA: {
		color: colors.lightgrey,
        fontWeight: "bold",
        fontSize: 20,
        fontFamily: "serif",
		textAlign: "center",
		marginTop: 15,
		width: "85%",
		marginLeft: "7%",
	},

	textB: {
		color: colors.lightgrey,
        fontStyle: "italic",
        fontSize: 13,
        fontFamily: "serif",
        textAlign: "center",
		marginTop: 15,
		width: "85%",
		marginLeft: "7%",
	},

	textC: {
		color: colors.lightgrey,
        fontStyle: "italic",
        fontSize: 13,
        fontFamily: "serif",
        textAlign: "center",
		marginTop: 15,
		width: "85%",
		marginLeft: "7%",
	},

	viewA: {
		width: "200%",
		marginTop: -120,
		marginLeft: 8,
	},
});
