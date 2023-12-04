import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { Stack } from 'expo-router';
import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
export default function OnBoardingScreen() {
    return (
        <SafeAreaView style={styles.page}>
            <Stack.Screen
                options={{
                    headerShown: false,
                }}
            />
            <View style={styles.pageContent}>
                <FontAwesome5
                    style={styles.image}
                    name='piggy-bank'
                    size={100}
                    color='#cef303'
                />
                <View style={styles.footer}>
                    <Text style={styles.title}>Track Everything</Text>
                    <Text style={styles.description}>
                        Do what you need to do, being mindful of your ways
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    page: {
        // alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: '#15141A',
    },
    pageContent: {
        padding: 20,
        flex: 1,
    },
    image: {
        alignSelf: 'center',
        margin: 20,
    },
    footer: {
        marginTop: 'auto',
    },
    title: {
        fontSize: 50,
        fontFamily: 'Inter_900Black',
        fontWeight: 'bold',
        color: '#fdfdfd',
        letterSpacing: 2,
        marginVertical: 20,
    },
    description: {
        color: 'gray',
        fontFamily: 'Inter_400Regular',
        fontSize: 20,
        lineHeight: 28,
    },
});
