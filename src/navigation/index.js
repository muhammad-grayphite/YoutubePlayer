import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LinkingConfiguration from './LinkingConfiguration';

import Home from "../view/Home";
import Feed from "../view/Feed";
import Filter from '../view/Filter';


const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Feed" component={Feed} />
      <Stack.Screen name="Filter" component={Filter} />
    </Stack.Navigator>
  );
}


function AppNavigator() {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

export default AppNavigator;