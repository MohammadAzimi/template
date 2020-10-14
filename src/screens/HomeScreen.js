import React from 'react';
import {SafeAreaView, View, StyleSheet, FlatList, Alert} from 'react-native';
import {Card, Text, Title, withTheme} from 'react-native-paper';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {groupOneApiService} from '../api/requests';
import {Margin, FontSize, IconSize} from '../configs/styles';

const featuresList = [
  {
    id: 'id_chart',
    title: 'Charts',
    subTitle: '',
    iconName: 'chart-line',
    iconColor: '',
    backgroundColor: '',
    description: 'lorem ipsum',
    destination: 'ChartScreen',
  },
  {
    id: 'id_news',
    title: 'News',
    subTitle: '',
    iconName: 'newspaper',
    iconColor: '',
    backgroundColor: '',
    description: 'lorem ipsum',
  },
  {
    id: 'id_maps',
    title: 'Map',
    subTitle: '',
    iconName: 'map-marked-alt',
    iconColor: '',
    backgroundColor: '',
    description: 'lorem ipsum',
  },
  {
    id: 'id_notification',
    title: 'Notification',
    subTitle: '',
    iconName: 'bell',
    iconColor: '',
    backgroundColor: '',
    description: 'lorem ipsum',
  },
  {
    id: 'id_donation',
    title: 'Buy me a coffee',
    subTitle: '',
    iconName: 'coffee',
    iconColor: '',
    backgroundColor: '',
    description: 'lorem ipsum',
  },
];

class Screen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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

  renderItems({item}) {
    const {
      theme: {colors},
      navigation,
    } = this.props;
    return (
      <Card
        style={styles.card}
        onPress={() =>
          item.destination
            ? navigation.navigate(item.destination)
            : Alert.alert(item.description)
        }>
        <Card.Content style={styles.cardContent}>
          <Icon
            name={item.iconName}
            color={item.iconColor || colors.primary}
            size={IconSize.home_items}
          />
          <Title style={styles.cardTitle}>{item.title}</Title>
        </Card.Content>
      </Card>
    );
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={featuresList}
          style={styles.listStyle}
          contentContainerStyle={styles.listContent}
          renderItem={this.renderItems.bind(this)}
          keyExtractor={(item) => item.id}
          numColumns={2}
          // columnWrapperStyle={{justifyContent: 'space-between'}}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textTemplate: {
    fontSize: FontSize.large_x,
    textAlign: 'center',
  },
  listStyle: {},
  listContent: {padding: Margin.normal},
  card: {
    margin: Margin.small,
    width: '50%',
    padding: Margin.normal,
  },
  cardContent: {alignItems: 'center', justifyContent: 'center'},
  cardTitle: {marginTop: Margin.normal, textAlign: 'center'},
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

export default withTheme(WrappedComponent);
