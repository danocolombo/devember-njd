import { View, Text, Button } from 'react-native';
import React from 'react';
import { Link, Stack } from 'expo-router';
import MarkdownDisplay from '@/components/day3/MarkdownDisplay';
import { SafeAreaView } from 'react-native-safe-area-context';

const description = `
# AirBNB screen
`;

const DayDetailsScreen = () => {
    return (
        <SafeAreaView edges={['bottom']} style={{ flex: 1 }}>
            <Stack.Screen options={{ title: 'Day 6: Tinder Swipes' }} />

            <MarkdownDisplay>{description}</MarkdownDisplay>

            <Link href='/day6/tinder' asChild>
                <Button title='Go to the swipes' />
            </Link>
        </SafeAreaView>
    );
};

export default DayDetailsScreen;
