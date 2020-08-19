import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import {Provider} from 'react-redux';

import store from './src/store/store';

const HomeAndOnlyScreen = () => {
  return (
    <View>
      <Text>Redux is ready</Text>
    </View>
  );
};

const App = () => {
  return (
    <Provider {...{store}}>
      <StatusBar barStyle="dark-content" />
      <HomeAndOnlyScreen />
    </Provider>
  );
};

export default App;
