import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LinkingConfiguration from './LinkingConfiguration';
import CustomSidebarMenu from '../components/CustomSidebarMenu';

import Home from "../view/Home";
import Feed from "../view/Feed";
import Filter from '../view/Filter';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

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
};

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerStyle={{ width: '80%', }}
      initialRouteName={'Root'}
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => <CustomSidebarMenu {...props} />}
    >
      <Drawer.Screen name={'Root'} component={RootNavigator} />
    </Drawer.Navigator>
  )
};

function AppNavigator() {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
    >
      <DrawerNavigator />
    </NavigationContainer>
  );
};
export default AppNavigator;