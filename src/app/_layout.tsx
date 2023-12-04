import { Stack } from 'expo-router';
import { useEffect } from 'react';
import {
    AmaticSC_700Bold,
    AmaticSC_400Regular,
} from '@expo-google-fonts/amatic-sc';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';
SplashScreen.preventAutoHideAsync();
export default function RootLayout() {
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
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor: 'yellow',
                },
            }}
        >
            <Stack.Screen
                name='index'
                options={{
                    title: 'Devember',
                }}
            />
        </Stack>
    );
}
