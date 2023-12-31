import { StyleSheet, Text, Pressable } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

type DayListItem = {
    day: number;
};

const DayListItem = ({ day }: DayListItem) => {
    return (
        <Link href={`/day${day}`} asChild>
            <Pressable style={styles.box}>
                <Text style={styles.text}>{day}</Text>
            </Pressable>
        </Link>
    );
};

export default DayListItem;

const styles = StyleSheet.create({
    box: {
        backgroundColor: '#f9ede3',
        flex: 1,
        aspectRatio: 1,
        // width: 100,
        // height: 100,
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#9b4521',
        borderRadius: 20,
    },
    text: {
        color: '#9b4521',
        fontFamily: 'AmaticSC_700Bold',
        fontSize: 70,
    },
});
