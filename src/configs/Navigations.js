import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

import HomeScreen from '../screens/HomeScreen';

// eslint
export default function ApplicationRoutes() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Stack.Navigator>
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
