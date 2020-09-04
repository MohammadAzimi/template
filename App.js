import 'react-native-gesture-handler';
import React from 'react';
import {I18nManager} from 'react-native';
import {Provider as StoreProvider, connect} from 'react-redux';
import {Provider as PaperProvider} from 'react-native-paper';

import store from './src/store/store';
import {initialTheme} from './src/store/actions/Globals';
import ApplicationRoutes from './src/configs/Navigations';
import {getTheme} from './src/configs/styles/Theme';

I18nManager.forceRTL(false);
I18nManager.allowRTL(false);

class AppWithRedux extends React.Component {
  // eslint
  componentDidMount() {
    this.props.initialTheme();
  }

  render() {
    const {themeName} = this.props.globals;
    const currentTheme = getTheme(themeName);
    return (
      <PaperProvider theme={currentTheme}>
        <ApplicationRoutes theme={currentTheme} />
      </PaperProvider>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    globals: state.globals,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    initialTheme: () => dispatch(initialTheme()),
  };
};

const AppWithReduxWrapper = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppWithRedux);

const App = () => {
  return (
    <StoreProvider {...{store}}>
      <AppWithReduxWrapper />
    </StoreProvider>
  );
};

export default App;
