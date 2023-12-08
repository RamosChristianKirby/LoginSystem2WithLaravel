// RecoveryScreen.js
import React, { useState } from 'react';
import { View, StyleSheet, Button, TextInput, Title } from 'react-native';

const RecoveryScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleRecovery = () => {
    // Simulated recovery logic
    if (email !== '') {
      // Implement your actual recovery logic here
      // For example, send a recovery email to the provided email
      
      // Navigate back to LandingScreen after successful recovery
      navigation.navigate('Landing'); // Navigating back to LandingScreen
    } else {
      // Handle empty email input case (optional)
      alert('Please enter your email.');
    }
  };

  return (
    <View style={styles.container}>
      <Title>Account Recovery</Title>
      <TextInput
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
      />
      <Button title="Recover Account" onPress={handleRecovery} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '80%',
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
  },
});

export default RecoveryScreen;
