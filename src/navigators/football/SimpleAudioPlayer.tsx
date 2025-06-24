import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Sound from 'react-native-sound';

const SimpleAudioPlayer = () => {
  const [sound, setSound] = useState<Sound>();
  const [isPlaying, setIsPlaying] = useState(false);

  const audioURL = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';

  const playSound = () => {
    if (sound) {
      // If sound already loaded, just play/pause
      if (isPlaying) {
        sound.pause();
        setIsPlaying(false);
      } else {
        sound.play();
        setIsPlaying(true);
      }
    } else {
      // Load and play sound
      const newSound = new Sound(audioURL, null, (error) => {
        if (error) {
          console.log('Error loading sound:', error);
          return;
        }
        
        newSound.play(() => {
          setIsPlaying(false);
        });
        setIsPlaying(true);
        setSound(newSound);
      });
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={playSound}>
        <Text style={styles.buttonText}>
          {isPlaying ? 'Pause' : 'Play'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SimpleAudioPlayer;