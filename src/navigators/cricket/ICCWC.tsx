import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'

const ICCWC = () => {
  const tabBarHeight = useBottomTabBarHeight()
  return (
    <KeyboardAvoidingView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingBottom: tabBarHeight }} behavior="padding">
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor: '#a9d79e' }}>
          <Text style={{ fontSize: 24 }}>ICC Cricket World Cup</Text>
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 18 }}>This is the ICC Cricket World Cup section.</Text>
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 18 }}>More features will be added soon!</Text>
        </View>
        <TextInput
          style={{
            flex: 1,
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            margin: 20,
            paddingHorizontal: 10,
            width: '80%',
          }}
          placeholder="Search for matches or teams"
          keyboardType="default"
        />
    </KeyboardAvoidingView>
  )
}

export default ICCWC

const styles = StyleSheet.create({})