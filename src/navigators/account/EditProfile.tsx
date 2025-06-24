import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { RootStackParamList } from '../../screens/SplashScreen'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { getItem, setItem } from '../../storage/storage'

const EditProfile = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>()
    const userString = getItem('user');
    const user = userString ? JSON.parse(userString) : null;
    const [name, setName] = useState(user?.name || '')
    const [email, setEmail] = useState(user?.email || '')

    const handleSave = () => {
        // Here you would typically save the changes to your backend or local storage
        setItem('user', JSON.stringify({ name, email }))
        console.log('Profile updated:', { name, email })
        navigation.goBack() // Navigate back to the previous screen after saving
    }
    
    const goToWtc = () => {
        navigation.navigate(
            'Home',
            {
                screen: 'Cricket',
                params: {
                    screen: 'WTC',
                }
            }
        )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.h1}>EditProfile</Text>
            <Text>Name: </Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
                placeholder="Enter your name"
                value={name}
                onChangeText={setName}
            />
            <Text>Email: </Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
                placeholder="Enter your email"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
            />
            <Pressable style={styles.saveButton} onPress={handleSave}>
                <Text style={{ color: 'white', fontSize: 16 }}>
                    Save Changes
                </Text>
            </Pressable>
            <Pressable style={styles.saveButton} onPress={goToWtc}>
                <Text style={{ color: 'white', fontSize: 16 }}>
                    Go to WTC
                </Text>
            </Pressable>
        </View>
    )
}

export default EditProfile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    h1: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    saveButton: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 10,
    },
})