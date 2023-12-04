import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    ActivityIndicator,
} from 'react-native';
import DayListItem from '../components/core/DayListItem';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import {
    AmaticSC_700Bold,
    AmaticSC_400Regular,
} from '@expo-google-fonts/amatic-sc';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function HomeScreen() {
    // create an array 1-24
    const days = [...Array(24)].map((val, index) => index + 1);
    const [fontsLoaded, fontError] = useFonts({
        Inter_900Black,
        AmaticSC_400Regular,
        AmaticSC_700Bold,
    });
    useEffect(() => {
        if (fontsLoaded && !fontError) {
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded, fontError]);
    if (!fontsLoaded && !fontError) {
        return null;
    }
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
