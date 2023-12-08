import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Title } from 'react-native-paper';

const LandingScreen = ({ navigation }) => {
  const handleAccountRecovery = () => {
    navigation.navigate('AccountRecovery'); // Navigate to RecoveryScreen
  };

  return (
    <View style={styles.container}>
      <Title>Welcome to MyApp</Title>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('Login')}
        style={styles.button}
      >
        Login
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('Registration')}
        style={styles.button}
      >
        Register
      </Button>
      <Button
        mode="text"
        onPress={handleAccountRecovery} // Navigate to RecoveryScreen for account recovery
        style={styles.recoveryButton}
      >
        Account Recovery
      </Button>
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
  button: {
    marginTop: 15,
    width: '100%',
  },
  recoveryButton: {
    marginTop: 15,
    width: '100%',
    backgroundColor: 'transparent', // Adjust button styling to match your design
  },
});

export default LandingScreen;
