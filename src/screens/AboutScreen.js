import React from 'react';
import {SafeAreaView, View, StyleSheet, Linking} from 'react-native';
import {Text, useTheme} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import LottieView from 'lottie-react-native';
import {Margin, FontSize} from '../configs/styles';

const AboutScreen = () => {
  const openLink = (link) => {
    Linking.openURL(link).catch((e) => console.log(e));
  };

  const {colors} = useTheme();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.lottieContainer}>
        <LottieView
          source={require('../assets/lotties/android-or-apple.json')}
          autoPlay
          loop
        />
      </View>
      <Text style={styles.textTemplate}>
        A template for boosting new react-native projects
      </Text>
      <View>
        <Text style={styles.textDeveloper}>Created by Mohammad Azimi</Text>
        <View style={styles.linkingBox}>
          <Icon
            name="linkedin"
            size={20}
            color={colors.text}
            onPress={() => openLink('https://linkedin.com/in/mohammadazimi')}
          />
          <Icon
            name="github"
            size={20}
            color={colors.text}
            onPress={() => openLink('https://github.com/mohammadazimi')}
          />
          <Icon
            name="telegram"
            size={20}
            color={colors.text}
            onPress={() => openLink('https://t.me/mh_az97')}
          />
          <Icon
            name="twitter"
            size={20}
            color={colors.text}
            onPress={() => openLink('https://twitter.com/mohammad_az97')}
          />
          <Icon
            name="envelope"
            size={20}
            color={colors.text}
            onPress={() => openLink('mailto:mohammadazimi91@gmail.com')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  textTemplate: {
    fontSize: FontSize.large_x,
    textAlign: 'center',
  },
  textDeveloper: {
    fontSize: FontSize.small_x,
    textAlign: 'center',
    marginTop: Margin.large_xxx,
  },
  linkingBox: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: Margin.large_xx,
  },
  lottieContainer: {width: '100%', height: 200, marginTop: -Margin.large_xxx},
});

export default AboutScreen;
