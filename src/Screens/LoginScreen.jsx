import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');

 const handleLogin = () => {
    // Check if the email and password match the expected values
    if (email === 'user@gmail.com' && password === 'pass123') {
      // Simulating successful login
      navigation.navigate('HomeS');
    } else {
      // Optionally, show an alert if the login fails
      alert('Invalid email or password');
    }
 };

 return (
    <View style={styles.container}>
      <Text style={styles.title}>Ecommerce Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.loginLink}
        onPress={() => {
          navigation.navigate('Sign in');
        }}>
        <Text style={styles.loginText}>New Member? Sign-up</Text>
      </TouchableOpacity>
    </View>
 );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
 },
 title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
 },
 input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
 },
 button: {
    backgroundColor: 'orange',
    width: '100%',
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
 },
 buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
 },
 loginLink: {
    marginTop: 10,
 },
 loginText: {
    fontSize: 14,
    color: 'orange',
    justifyContent: 'center',
    alignSelf: 'center',
 },
});

export default LoginScreen;
