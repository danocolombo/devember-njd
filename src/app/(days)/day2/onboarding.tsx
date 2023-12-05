import { View, Text, StyleSheet, SafeAreaView, Pressable } from 'react-native';
import { Stack, router } from 'expo-router';
import React, { useState } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import {
    GestureDetector,
    Gesture,
    Directions,
} from 'react-native-gesture-handler';
import Animated, {
    FadeIn,
    FadeOut,
    BounceInRight,
    SlideOutLeft,
    BounceOutLeft,
    SlideInRight,
} from 'react-native-reanimated';
const onBoardingSteps = [
    {
        icon: 'snowflake',
        title: 'Welcome DEVember',
        description: 'Daily React Native development opportunities',
    },
    {
        icon: 'people-arrows',
        title: "Let's get together",
        description: 'None of us are better than all of us!',
    },
    {
        icon: 'bacteria',
        title: 'Co-exist',
        description:
            'No matter how hard we try, we know that there is peace with nature.',
    },
];
export default function OnBoardingScreen() {
    const [screenIndex, setScreenIndex] = useState(0);
    const data = onBoardingSteps[screenIndex];

    const onContinue = () => {
        const isLastScreen = screenIndex === onBoardingSteps.length - 1;
        if (isLastScreen) {
            endOnboarding();
        } else {
            setScreenIndex(screenIndex + 1);
        }
    };

    const endOnboarding = () => {
        router.back();
    };
    const onBack = () => {
        const isFirstScreen = screenIndex === 0;
        if (isFirstScreen) {
            endOnboarding();
        } else {
            setScreenIndex(screenIndex - 1);
        }
    };

    const swipes = Gesture.Simultaneous(
        Gesture.Fling().direction(Directions.LEFT).onEnd(onContinue),
        Gesture.Fling().direction(Directions.RIGHT).onEnd(onBack)
    );
    return (
        <SafeAreaView style={styles.page}>
            <StatusBar style='light' />
            <Stack.Screen
                options={{
                    headerShown: false,
                }}
            />
            <View style={styles.stepIndicatorContainer}>
                {onBoardingSteps.map((step, index) => (
                    <View
                        key={index}
                        style={[
                            styles.stepIndicator,
                            {
                                backgroundColor:
                                    index === screenIndex ? '#cef303' : 'gray',
                            },
                        ]}
                    />
                ))}
            </View>
            <GestureDetector gesture={swipes}>
                <View style={styles.pageContent}>
                    <Animated.View
                        entering={FadeIn}
                        exiting={FadeOut}
                        key={screenIndex}
                    >
                        <FontAwesome5
                            style={styles.image}
                            name={data.icon}
                            size={100}
                            color='#cef303'
                        />
                    </Animated.View>
                    <View style={styles.footer}>
                        <Animated.Text
                            entering={SlideInRight}
                            exiting={SlideOutLeft}
                            style={styles.title}
                        >
                            <Text style={styles.title}>{data.title}</Text>
                        </Animated.Text>
                        <Animated.Text
                            entering={SlideInRight.delay(50)}
                            exiting={SlideOutLeft}
                            style={styles.description}
                        >
                            <Text style={styles.description}>
                                {data.description}
                            </Text>
                        </Animated.Text>
                        <View style={styles.buttonsRow}>
                            <Text
                                onPress={endOnboarding}
                                style={styles.buttonText}
                            >
                                skip
                            </Text>
                            <Pressable
                                onPress={onContinue}
                                style={styles.button}
                            >
                                <Text style={styles.buttonText}>CONTINUE</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </GestureDetector>
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
    stepIndicatorContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginHorizontal: 15,
        gap: 5,
    },
    stepIndicator: {
        flex: 1,
        height: 5,
        backgroundColor: 'gray',
        borderRadius: 10,
        margin: 5,
    },
    image: {
        alignSelf: 'center',
        margin: 20,
        marginTop: 50,
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
        marginVertical: 15,
    },
    description: {
        color: 'gray',
        fontFamily: 'Inter_400Regular',
        fontSize: 20,
        lineHeight: 28,
    },
    buttonsRow: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
        marginHorizontal: 20,
    },
    button: {
        backgroundColor: '#302E38',
        borderRadius: 50,
        alignItems: 'center',
        flex: 1,
    },
    buttonText: {
        color: '#fdfdfd',
        fontFamily: 'Inter_600SemiBold',
        fontSize: 16,
        letterSpacing: 3,
        padding: 15,
        paddingHorizontal: 15,
    },
});
