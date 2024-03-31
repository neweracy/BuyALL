import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Parse from 'parse/react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

Parse.setAsyncStorage(AsyncStorage);

Parse.initialize('appid', 'java','masterr');
Parse.serverURL = 'http://localhost:1337/parse';

const SignUpScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSign = async () => {
    try {
      // Create a new Parse User object
      const user = new Parse.User();
      user.set('username', username);
      user.set('email', email);
      user.set('password', password);

      
      await user.signUp();

      console.log('User signed up:', user);
      console.log('Email:', email);
      console.log('Password:',password);
      console.log('username:',username);

      // Navigate to Home screen after successful sign up
      navigation.navigate('HomeS');
    } catch (error) {
      console.error('Error signing up:', error);
      
    }
  };

//   const handleSign = () => {
//     console.log('Email:', email);
//     console.log('Username',username);
//     console.log('Password:', password);
    
//     navigation.navigate('HomeS');
//     // // For example, sending the email and password to a server
//  };
  return (
    <View style={styles.container}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../../pictures/refer.png')}
          style={styles.logo}
        />
        <Text style={styles.logoText}>My App</Text>
      </View>

      {/* Form */}
      <View style={styles.formContainer}>
      <TextInput
          style={[styles.input, { color: 'black' }]}
          placeholder="Username"
          placeholderTextColor={'black'}
          onChangeText={text => setUsername(text)}
        />
        <TextInput
          style={[styles.input, { color: 'black' }]}
          placeholder="Email"
          placeholderTextColor={'black'}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          style={[styles.input, { color: 'black' }]}
          placeholder="Password"
          placeholderTextColor={'black'}
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
        />
        <TouchableOpacity style={styles.button} onPress={handleSign}>
        <Text style={styles.buttonText}>Signin</Text>
      </TouchableOpacity>
        {/* SignUp button removed */}
        <TouchableOpacity
          style={styles.loginLink}
          onPress={() => {
            navigation.navigate('LoginScreen');
          }}>
          <Text style={styles.loginText}>Already a Member? Login</Text>
        </TouchableOpacity>
      </View>

      {/* Illustration */}
      <Image
      source={require('../../pictures/signIn.png')}
        style={styles.illustration}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 50,
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  formContainer: {
    width: '80%',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 7,
  },
  button: {
    backgroundColor: 'orange',
    paddingVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  illustration: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
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

export default SignUpScreen;
