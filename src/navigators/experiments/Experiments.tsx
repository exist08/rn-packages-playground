import { Alert, Linking, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Experiments = () => {
    const openUrl = () => {
        // const url = "https://www.instagram.com/appwizards"
        const encodedMessage = encodeURIComponent("Hello there! Check out our latest updates on Instagram.");
        const url = `whatsapp://send?text=${encodedMessage}&phone=917999714890`;
        Linking.openURL(url)
    }

    const openMap = () => {
        const latitude = 37.78825;
        const longitude = -122.4324;
        Linking.openURL('geo:37.484847,-122.148386')
            .catch((err) => {
                console.error('An error occurred', err);
                Alert.alert('Error', 'Failed to open map');
            });
    }

    const testDeepLink = () => {
        try{
            Linking.openURL('myapp://football/ucl');
        }catch (error) {
            console.error('Failed to open deep link', error);
            Alert.alert('Error', 'Failed to open deep link');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>App Wizards</Text>
            <Pressable
                style={{ padding: 15, backgroundColor: 'white', borderRadius: 5, marginTop: 10 }}
                onPress={openUrl}
                android_ripple={{ color: 'lightgray' }}
            >
                <Text style={{ color: 'blue', fontSize: 18 }}>Follow us on Insta</Text>
            </Pressable>
            <Pressable
                style={{ padding: 15, backgroundColor: 'white', borderRadius: 5, marginTop: 10 }}
                onPress={openMap}
                android_ripple={{ color: 'lightgray' }}
            >
                <Text style={{ color: 'blue', fontSize: 18 }}>Open Map</Text>
            </Pressable>
            <Pressable onPress={testDeepLink} style={{ padding: 15, backgroundColor: 'white', borderRadius: 5, marginTop: 10 }}>
                <Text style={{ color: 'blue', fontSize: 18, }}>
                    Test Deep Linking
                </Text>
            </Pressable>
        </View>
    )
}

export default Experiments

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#FEBA17"
    },
    text: {
        fontSize: 28,
        fontWeight: 'bold',
    },
})