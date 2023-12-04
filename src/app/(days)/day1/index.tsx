import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';
import React from 'react';

const DayDetailsScreen = () => {
    return (
        <View>
            <Text>Day Details Screen</Text>
            <Link href='/'>Back</Link>
        </View>
    );
};

export default DayDetailsScreen;

const styles = StyleSheet.create({});
