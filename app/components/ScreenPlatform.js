import React from 'react';
import { StyleSheet, StatusBar, SafeAreaView } from 'react-native';

export default function ScreenPlatform({children}) {
    return (
        <SafeAreaView style= {styles.container} >
            {children}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: StatusBar.currentHeight,
    },
});
