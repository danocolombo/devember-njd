import { Stack } from 'expo-router';
import { useEffect, useState } from 'react';
import {
    AmaticSC_700Bold,
    AmaticSC_400Regular,
} from '@expo-google-fonts/amatic-sc';
import {
    useFonts,
    Inter_400Regular,
    Inter_900Black,
    Inter_600SemiBold,
} from '@expo-google-fonts/inter';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import * as SplashScreen from 'expo-splash-screen';
import AnimatedSplashScreen from '@/components/day4/AnimatedSplashScreen';
import Animated, { FadeIn } from 'react-native-reanimated';
// make splash screen display until hid...
SplashScreen.preventAutoHideAsync();
export default function RootLayout() {
    const [appReady, setAppReady] = useState(false);
    const [splashAnimationFinished, setSplashAnimationFinished] =
        useState(false);
    const [fontsLoaded, fontError] = useFonts({
        Inter_400Regular,
        Inter_900Black,
        Inter_600SemiBold,
        AmaticSC_400Regular,
        AmaticSC_700Bold,
    });
    useEffect(() => {
        if (fontsLoaded && !fontError) {
            SplashScreen.hideAsync();
            setAppReady(true);
        }
    }, [fontsLoaded, fontError]);

    const showAnimatedSplash = !appReady || !splashAnimationFinished;
    if (showAnimatedSplash) {
        return (
            <AnimatedSplashScreen
                onAnimationFinish={(isCancelled) => {
                    if (!isCancelled) {
                        setSplashAnimationFinished(true);
                    }
                }}
            />
        );
    }

    if (!appReady) {
        return null;
    }
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
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
        </GestureHandlerRootView>
    );
}
