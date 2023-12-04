import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import DayListItem from '@/components/core/DayListItem';

export default function HomeScreen() {
    // create an array 1-24
    const days = [...Array(24)].map((val, index) => index + 1);

    return (
        <View style={styles.container}>
            <FlatList
                data={days}
                contentContainerStyle={styles.content}
                columnWrapperStyle={styles.column}
                numColumns={2}
                renderItem={({ item }) => <DayListItem day={item} />}
            />
            <StatusBar style='auto' />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    content: {
        gap: 10,
        padding: 10,
    },
    column: {
        gap: 10,
    },
});
