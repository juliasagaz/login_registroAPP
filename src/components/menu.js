import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import ContatoScreen from '../screens/ContatoScreen';
import React from 'react';

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Contato" component={ContatoScreen} />
    </Drawer.Navigator>
  );
}