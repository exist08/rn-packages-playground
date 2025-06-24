import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import ICCWC from './ICCWC'
import T20IWC from './T20IWC'
import WTC from './WTC'

const Drawer = createDrawerNavigator()

const CricketDrawer = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                drawerStyle: {
                    backgroundColor: '#fff',
                    width: 240,
                },
            }}
        >
            <Drawer.Screen name="T20IWC" component={T20IWC} options={{ headerTitle: "ICC T20 World Cup" }} />
            <Drawer.Screen name="ICCWC" component={ICCWC} options={{ headerTitle: "ICC ODI World Cup" }} />
            <Drawer.Screen name="WTC" component={WTC} options={{ headerTitle: "ICC World Test Championship" }} />
        </Drawer.Navigator>
    )
}

export default CricketDrawer

const styles = StyleSheet.create({})