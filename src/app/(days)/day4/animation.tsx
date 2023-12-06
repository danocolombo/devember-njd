import { StyleSheet, Text, Button, View } from 'react-native';
import React, { useRef } from 'react';
import LottieView from 'lottie-react-native';

const AnimationScreen = () => {
    const animation = useRef<LottieView>(null);
    return (
        <View>
            <View>
                <Text>AnimationScreen</Text>
            </View>
            <LottieView
                ref={animation}
                style={{
                    width: 200,
                    height: 200,
                    backgroundColor: '#eee',
                }}
                // Find more Lottie files at https://lottiefiles.com/featured
                source={require('@assets/lottie/netflix-lottie.json')}
            />
            <Button
                title='PLAY ANIMATION'
                onPress={() => animation.current?.play()}
            />
            <Button title='PAUSE' onPress={() => animation.current?.pause()} />
            <Button title='RESET' onPress={() => animation.current?.reset()} />
        </View>
    );
};

export default AnimationScreen;

const styles = StyleSheet.create({});
