import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Title, IconButton, TextInput } from 'react-native-paper';

const RecoveryScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleRecovery = () => {
    // Simulated recovery logic
    if (email.trim() !== '') {
      // Implement your actual recovery logic here
      // For example, send a recovery email to the provided email
      navigation.navigate('Login'); // Navigate to LoginScreen after successful recovery
    } else {
      alert('Please enter your email.'); // Notify user to enter an email
    }
  };

  const handleGoBack = () => {
    navigation.navigate('Login'); // Navigate to LoginScreen when pressing the back button
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <IconButton
          icon="arrow-left"
          onPress={handleGoBack}
          color="#555"
          size={24}
          style={styles.backButton}
        />
        <Title style={styles.title}>Account Recovery</Title>
      </View>
      <View style={styles.form}>
        <TextInput
          label="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCompleteType="email"
        />
        <Button mode="contained" onPress={handleRecovery} style={styles.button}>
          Recover Account
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    marginRight: 10,
  },
  title: {
    fontSize: 20,
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
  },
  button: {
    marginTop: 20,
    width: '80%',
  },
});

export default RecoveryScreen;
