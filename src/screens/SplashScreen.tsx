import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, CommonActions, NavigationProp } from '@react-navigation/native'

// Adjust this type to match your navigator's param list
export type RootStackParamList = {
  Splash: undefined,
  Home: {
    screen: string
    params?: {
      screen?: string
    }
  },
  EditProfile: undefined
}

const SplashScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>()

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [
            {
              name: 'Home',
              params: {
                screen: 'Football',
                params: { screen: 'UCL' },
              },
            },
          ],
        })
      )
    }, 2000)

    return () => {
      clearTimeout(timer)
    }
  }, [navigation])

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Welcome to Sports App</Text>
      <Text style={{ fontSize: 16, marginTop: 10 }}>Loading...</Text>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({})