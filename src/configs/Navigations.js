import * as React from 'react';
import {StatusBar} from 'react-native';
import {useTheme} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import CustomDrawerContent from '../components/Drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createMaterialBottomTabNavigator();

import HomeScreen from '../screens/HomeScreen';
import SettingScreen from '../screens/SettingScreen';
import AboutScreen from '../screens/AboutScreen';
import SplashScreen from '../screens/SplashScreen';
import {IconSize} from './styles';
import {CalendarScreen} from '../screens/calendar';

function HomeStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Features" component={HomeScreen} />
      <Stack.Screen name="Features_Calender" component={CalendarScreen} />
    </Stack.Navigator>
  );
}

function Tabs() {
  const {colors} = useTheme();
  return (
    <Tab.Navigator barStyle={{backgroundColor: colors.contrast}}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, focused}) => (
            <MaterialCommunityIcons
              name={focused ? 'home-variant' : 'home-variant-outline'}
              color={color}
              size={IconSize.bottom_navigation}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          tabBarLabel: 'Setting',
          tabBarIcon: ({color, focused}) => (
            <MaterialCommunityIcons
              name={focused ? 'cog' : 'cog-outline'}
              color={color}
              size={IconSize.bottom_navigation}
            />
          ),
        }}
      />
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
