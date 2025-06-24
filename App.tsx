import { Alert, Linking, StatusBar, StyleSheet } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { NavigationContainer, NavigationRoute } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import BottomTabs from './src/navigators/BottomTabs'
import 'react-native-gesture-handler'
import 'react-native-reanimated'
import SplashScreen from './src/screens/SplashScreen'
import EditProfile from './src/navigators/account/EditProfile'

const Stack = createNativeStackNavigator()

const App = () => {

  const navigationRef = useRef(null);

  useEffect(() => {
    const getInitialURL = async () => {
      const initialUrl = await Linking.getInitialURL();
      if (initialUrl) {
        console.log('Initial URL:', initialUrl);
        handleDeepLink(initialUrl);
      }
    };

    const subscription = Linking.addEventListener('url', ({ url }) => {
      console.log('Deep link received:', url);
      handleDeepLink(url);
    });

    getInitialURL();
    return () => subscription?.remove();
  }, []);

  const handleDeepLink = (url :string) => {
    console.log('Processing deep link:', url);
    
    // Parse the URL
    let path = '';
    if (url.includes('example.com')) {
      path = url.replace('https://example.com/path', '');
    } else if (url.startsWith('myapp://')) {
      path = url.replace('myapp://', '');
    }
    
    console.log('Extracted path:', path);
    
    const route = parseDeepLink(path);
    
    if (route && navigationRef.current) {
      // Show alert for demonstration
      Alert.alert(
        'Deep Link Detected', 
        `Navigating to: ${route.name}`,
        [
          { 
            text: 'OK', 
            onPress: () => {
              navigationRef.current.navigate(route.name, route.params);
            }
          }
        ]
      );
    }
  };

  const parseDeepLink = (path) => {
    // Remove leading slash if present
    path = path.startsWith('/') ? path.substring(1) : path;
    
    const parts = path.split('/');
    const [section, subsection] = parts;
    
    console.log('Parsed parts:', { section, subsection });
    
    switch (section) {
      case 'football':
        if (subsection === 'ucl') {
          return {
            name: 'Home',
            params: {
              screen: 'Football',
              params: { screen: 'UCL' },
            },
          };
        } else if (subsection === 'premier') {
          return {
            name: 'Home',
            params: {
              screen: 'Football',
              params: { screen: 'PremierLeague' },
            },
          };
        } else if (subsection === 'laliga') {
          return {
            name: 'Home',
            params: {
              screen: 'Football',
              params: { screen: 'LaLiga' },
            },
          };
        }
        // Default to Football tab
        return {
          name: 'Home',
          params: { screen: 'Football' },
        };
      
      case 'basketball':
        return {
          name: 'Home',
          params: { screen: 'Basketball' },
        };
      
      case 'tennis':
        return {
          name: 'Home',
          params: { screen: 'Tennis' },
        };
      
      default:
        return {
          name: 'Home',
          params: {},
        };
    }
  };


  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Home" component={BottomTabs} />
          <Stack.Screen name="EditProfile" component={EditProfile} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}

export default App

const styles = StyleSheet.create({})