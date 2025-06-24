import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import UCL from './UCL'
import NationsLeague from './NationsLeague'
import ClubWC from './ClubWC'


const Drawer = createDrawerNavigator()

const FootballDrawer = () => {
  return (
        <Drawer.Navigator
            screenOptions={{
                drawerStyle: {
                    backgroundColor: '#0118D8',
                    width: 240,
                },
                drawerActiveTintColor: '#FFF8F8',
                drawerInactiveTintColor: "#E9DFC3",
                drawerHideStatusBarOnOpen: true,
                drawerStatusBarAnimation: 'fade'
            }}
        >
            <Drawer.Screen name="ClubWC" component={ClubWC} options={{ headerTitle: "Club World Cup" }} />
            <Drawer.Screen name="NationsLeague" component={NationsLeague} options={{ headerTitle: "UEFA Nations League"  }} />
            <Drawer.Screen name="UCL" component={UCL} options={{ headerTitle: "UCL" }} />
        </Drawer.Navigator>
  )
}

export default FootballDrawer

const styles = StyleSheet.create({})