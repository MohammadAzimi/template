import React from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';
import {Divider, Text, Title, Switch, useTheme} from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';
import {Margin, FontSize} from '../configs/styles';
import {Themes} from '../configs/styles/Theme';
import {changeTheme} from '../store/actions/Globals';

const SettingScreen = (props) => {
  console.log(props);
  const globals = useSelector((state) => state.globals);
  const dispatch = useDispatch();
  const isDarkMode = globals.themeName === Themes.DARK;
  const {colors} = useTheme();

  const onToggleTheme = React.useCallback(
    (_isDarkMode) =>
      dispatch(changeTheme(_isDarkMode ? Themes.LIGHT : Themes.DARK)),
    [dispatch],
  );

  // const onToggleSwitch = () => dispatch(change)};
  return (
    <SafeAreaView style={[styles.container]}>
      <View style={styles.row}>
        <Title>Theme</Title>
      </View>
      <View style={[styles.row, {backgroundColor: colors.contrast}]}>
        <Text style={[styles.switchText]}>Dark Mode</Text>
        <Switch
          value={isDarkMode}
          onValueChange={() => onToggleTheme(isDarkMode)}
        />
      </View>
      <Divider />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  switchText: {
    fontSize: FontSize.normal,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Margin.large_x,
    minHeight: 42,
  },
});

export default SettingScreen;
