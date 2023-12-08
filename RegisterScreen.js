import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Title } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const showToast = (message) => {
    // Function to display a toast or alert message
    // Implementation depends on your specific UI library or component
    console.log(message); // For example, log the message to the console
  };

  const handleRegistration = async () => {
    try {
      setLoading(true);
      if (name === '' || email === '' || password === '') {
        showToast('Please input required data');
        setIsError(true);
        setLoading(false);
        return false;
      }

      if (password !== repassword) {
        showToast('Password does not match');
        setIsError(true);
        setLoading(false);
        return false;
      }

      const url = 'http://192.168.1.5/api/v1/register';
      const data = {
        name,
        email,
        password,
        password_confirmation: repassword,
      };

      // Perform registration logic using 'url' and 'data' variables
      // For instance, use fetch or axios to make an API call for registration

      // Simulated registration logic
      // After successful registration, navigate back to the login screen
      navigation.navigate('Login'); // Navigating back to the Login screen
    } catch (error) {
      console.error('Registration failed:', error);
      setIsError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Register</Title>
      <TextInput
        label="Name"
        value={name}
        onChangeText={(text) => setName(text)}
        style={styles.input}
      />
      <TextInput
        label="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
      />
      <TextInput
        label="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
        style={styles.input}
      />
      <TextInput
        label="Confirm Password"
        secureTextEntry
        value={repassword}
        onChangeText={(text) => setRepassword(text)}
        style={styles.input}
      />
      <Button
        mode="contained"
        onPress={handleRegistration}
        style={styles.button}
        loading={isLoading}
        disabled={isLoading}
      >
        Register
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
  title: {
    fontSize: 28,
    marginBottom: 20,
    color: '#333333',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    marginBottom: 15,
  },
  button: {
    marginTop: 15,
    width: '100%',
  },
});

export default RegisterScreen;
