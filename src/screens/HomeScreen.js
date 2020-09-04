import React from 'react';
import {SafeAreaView, View, StyleSheet, Linking} from 'react-native';
import {Text, useTheme} from 'react-native-paper';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {groupOneApiService} from '../api/requests';
import {Margin, FontSize} from '../configs/styles';

class Screen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  openLink(link) {
    Linking.openURL(link).catch((e) => console.log(e));
  }

  // api fetch example
  async _fetchApiExample() {
    groupOneApiService.getExample().then((res) => {
      // if (res.ok) {
      //   do something
      // }
      console.log(res);
    });
  }

  render() {
    const {
      theme: {colors},
    } = this.props;
    return (
      <SafeAreaView style={styles.container}>
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
              onPress={this.openLink.bind(
                this,
                'https://linkedin.com/in/mohammadazimi',
              )}
            />
            <Icon
              name="github"
              size={20}
              color={colors.text}
              onPress={this.openLink.bind(
                this,
                'https://github.com/mohammadazimi',
              )}
            />
            <Icon
              name="telegram"
              size={20}
              color={colors.text}
              onPress={this.openLink.bind(this, 'https://t.me/mh_az97')}
            />
            <Icon
              name="twitter"
              size={20}
              color={colors.text}
              onPress={this.openLink.bind(
                this,
                'https://twitter.com/mohammad_az97',
              )}
            />
            <Icon
              name="envelope"
              size={20}
              color={colors.text}
              onPress={this.openLink.bind(
                this,
                'mailto:mohammadazimi91@gmail.com',
              )}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

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
});

const mapStateToProps = (state) => {
  return {
    // userProfile: state.auth
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // removeUserProfile: () => dispatch(logoutUser())
  };
};

const WrappedComponent = connect(mapStateToProps, mapDispatchToProps)(Screen);

export default function (props) {
  const theme = useTheme();

  return <WrappedComponent {...props} theme={theme} />;
}
