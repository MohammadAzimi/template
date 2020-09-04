import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {StyleSheet, ImageBackground} from 'react-native';
import {Headline, withTheme} from 'react-native-paper';

function CustomDrawerContent(props) {
  console.log(props);
  const {colors} = props.theme;
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles.drawerList}>
      <ImageBackground
        source={require('../assets/images/nav-menu-header-bg.jpg')}
        style={[styles.headerContainer, {backgroundColor: colors.accent}]}>
        <Headline>Template</Headline>
      </ImageBackground>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    height: 200,
    justifyContent: 'flex-end',
    paddingHorizontal: 8,
    paddingVertical: 16,
  },
  drawerList: {
    paddingTop: 0,
  },
});

export default withTheme(CustomDrawerContent);
