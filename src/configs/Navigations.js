import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import CustomDrawerContent from '../components/Drawer';

const Stack = createStackNavigator();
const RootStack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

import HomeScreen from '../screens/HomeScreen';
import SettingScreen from '../screens/SettingScreen';
import AboutScreen from '../screens/AboutScreen';
import SplashScreen from '../screens/SplashScreen';
import {StatusBar} from 'react-native';

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Mohammad Azimi" component={HomeScreen} />
    </Stack.Navigator>
  );
}

function Tabs(props) {
  console.log(props);
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Setting" component={SettingScreen} />
    </Tab.Navigator>
  );
}

function DrawerStack() {
  return (
    <Drawer.Navigator
      initialRouteName="Tabs"
      drawerType="slide"
      drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        key="Tabs"
        name="Home"
        component={Tabs} //no explicit Stack.Navigator is permitted!
      />
      <Drawer.Screen
        key="About"
        name="About"
        component={AboutScreen} //no explicit Stack.Navigator is permitted!
      />
    </Drawer.Navigator>
  );
}

// eslint
export default function ApplicationRoutes({theme}) {
  return (
    <>
      <StatusBar
        barStyle={theme.dark ? 'light-content' : 'dark-content'}
        backgroundColor={theme.colors.background}
      />
      <NavigationContainer theme={theme}>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Drawer" component={DrawerStack} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
