import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import LottieView from 'lottie-react-native';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Drawer');
    }, 1500);
  }, []);
  return (
    <View style={styles.container}>
      <LottieView
        source={require('../assets/lotties/scanner.json')}
        autoPlay
        // loop
      />
      <Text style={styles.textMain}>initializing</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textMain: {
    fontSize: 24,
    textAlign: 'center',
  },
});

export default SplashScreen;
