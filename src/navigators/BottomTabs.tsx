import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FootballDrawer from './football/FootballDrawer'
import CricketDrawer from './cricket/CricketDrawer'
import Account from './account/Account'
import Experiments from './experiments/Experiments'

const Tab = createBottomTabNavigator()

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 60,
          backgroundColor: '#fff',
          borderTopWidth: 0,
        },
        animation: 'shift'
      }}
    >
      <Tab.Screen name="Football" component={FootballDrawer} options={{ tabBarLabel: "Football" }} />
      <Tab.Screen name="Cricket" component={CricketDrawer} options={{ tabBarLabel: "Cricket" }} />
      <Tab.Screen name="Account" component={Account} options={{ tabBarLabel: "Account" }} />
      <Tab.Screen name="Experiments" component={Experiments} options={{ tabBarLabel: "Experiments" }} />
    </Tab.Navigator>
  )
}

export default BottomTabs

const styles = StyleSheet.create({})