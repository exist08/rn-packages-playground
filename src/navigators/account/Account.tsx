import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { getItem } from '../../storage/storage'
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../screens/SplashScreen';

const Account = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const userString = getItem('user');
    const user = userString ? JSON.parse(userString) : null;

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Account</Text>
            <Image source={{ uri: 'https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740' }} style={{ width: 100, height: 100 }} />
            <Text style={styles.subText}>{user?.name}</Text>
            <Text style={styles.subText2}>{user?.email}</Text>
            <Text style={styles.subText}>Welcome to your account!</Text>
            <Pressable onPress={()=> navigation.navigate('EditProfile')}>
                <Text style={{ color: 'blue', marginTop: 10 }}>Edit Profile</Text>
            </Pressable>
        </View>
    )
}

export default Account

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#FF9149"
    },
    text: {
        fontSize: 36,
        fontWeight: 'bold',
    },
    subText: {
        fontSize: 24,
        marginTop: 10,
    },
    subText2: {
        fontSize: 20,
        marginTop: 10,
    },
})