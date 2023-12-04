import { StyleSheet, Text, View } from 'react-native';
import { Link, Stack } from 'expo-router';
import React from 'react';

const DayDetailsScreen = () => {
    return (
        <View>
            <Stack.Screen
                options={{
                    headerStyle: {
                        backgroundColor: 'orange',
                    },
                    title: 'DAY 1',
                }}
            />
            <Text style={styles.text}>Day Details Screen</Text>
            <Link href='/'>Back</Link>
        </View>
    );
};
export default DayDetailsScreen;

const styles = StyleSheet.create({
    text: {
        fontFamily: 'AmaticSC_700Bold',
        fontSize: 30,
    },
});
