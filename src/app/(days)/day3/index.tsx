import { Button, StyleSheet, Text, View } from 'react-native';
import { Link, Stack } from 'expo-router';
import React from 'react';

const DayDetailsScreen = () => {
    return (
        <View style={{ flexDirection: 'column', flex: 1 }}>
            <Stack.Screen
                options={{
                    headerStyle: {
                        backgroundColor: 'orange',
                    },
                    title: 'DAY 3',
                }}
            />
            <Text style={styles.text}>Day Three Details Screen</Text>
            <Link href='/day3/editor' asChild>
                <Button title='Go to Editor' />
            </Link>
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
