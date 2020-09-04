import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textMain}>About Screen</Text>
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

export default AboutScreen;
