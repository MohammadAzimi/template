import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar, I18nManager} from 'react-native';
import {Provider} from 'react-redux';

import store from './src/store/store';
import HomeScreen from './src/screens/HomeScreen';
import ApplicationRoutes from './src/configs/Navigations';

I18nManager.forceRTL(false);
I18nManager.allowRTL(false);

const App = () => {
  return (
    <Provider {...{store}}>
      <StatusBar barStyle="light-content" />
      <ApplicationRoutes />
    </Provider>
  );
};

export default App;
