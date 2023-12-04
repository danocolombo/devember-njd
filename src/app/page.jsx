import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const PageSample = () => {
    return (
        <View>
            <Text>PageSample</Text>
            <Link href='/'>Back</Link>
        </View>
    );
};

export default PageSample;

const styles = StyleSheet.create({});
