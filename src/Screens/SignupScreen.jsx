import "react-native-get-random-values"
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  useWindowDimensions,
} from 'react-native';
import {MotiView} from 'moti';
import Parse from 'parse/react-native';
import {scale, moderateScale, verticalScale} from 'react-native-size-matters';
import {FullBlob, SignUp} from '../assets/LoadSvg';
import AsyncStorage from '@react-native-async-storage/async-storage';

Parse.setAsyncStorage(AsyncStorage);
Parse.initialize('7ONxPNpiJf5tERZskqM3YfUjLOIaQmIJrVgChGqY', 'zCOltW3mgeq8DjtMzQ7Kg2QFKVJ9BlmWAMUy1lY9' , '59OsdAbMVImPHLBFHrYVuchqeqBMJZwLdKGRiKkR');
Parse.serverURL = 'https://parseapi.back4app.com';

const SignUpScreen = ({navigation}) => {
  const {width, height} = useWindowDimensions();

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
      console.log('Password:', password);
      console.log('username:', username);

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
  // For example, sending the email and password to a server
  //  };
  return (
    <View style={styles.container}>
      <View
        style={{
          marginTop: moderateScale(15),
        }}>
        <Text style={styles.logoText}>Create an</Text>
        <Text style={styles.logoText}>Account</Text>
      </View>

      <View style={styles.topContainer}>
        <MotiView style={styles.blobs}>
          <FullBlob height={verticalScale(250)} width={scale(250)} />
        </MotiView>
        <MotiView
          style={styles.bag}
          from={{opacity: 0, scale: 0.2}}
          animate={{opacity: 1, scale: 1}}
          transition={{delay: 400}}>
          <SignUp height={verticalScale(150)} width={scale(200)} />
        </MotiView>
      </View>

      {/* Form */}
      <View style={styles.formContainer}>
        <View
          style={{
            top: moderateScale(-30),
          }}>
          <TextInput
            style={[styles.input, {width: width * 0.8}]}
            placeholder="Email"
            placeholderTextColor="rgba(96,108,56,0.6)"
            onChangeText={text => setEmail(text)}
          />
          <TextInput
            style={[styles.input, {marginVertical: 10}]}
            placeholder="Username"
            placeholderTextColor="rgba(96,108,56,0.6)"
            onChangeText={text => setUsername(text)}
          />
          <TextInput
            style={[styles.input, {color: 'black'}]}
            placeholder="Password"
            placeholderTextColor="rgba(96,108,56,0.6)"
            secureTextEntry={true}
            onChangeText={text => setPassword(text)}
          />
        </View>
        <View
          style={{
            top: moderateScale(-50),
          }}>
          <TouchableOpacity
            style={[styles.button, {width: width * 0.8}]}
            onPress={handleSign}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
          {/* SignUp button removed */}
          <TouchableOpacity
            style={styles.loginLink}
            onPress={() => {
              navigation.navigate('LoginScreen');
            }}>
            <Text style={styles.loginText}>Already a Member? </Text>
            <Text style={[styles.loginText,{color: 'blue',fontSize: 15 }]}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255,236,209,0.2)',
    justifyContent: 'space-around',
  },
  topContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  blobs: {
    alignItems: 'center', // To align the image to the right
    justifyContent: 'center',
    zIndex: -1,
    flex: 1,
    width: '100%',
    position: 'absolute',
  },
  bag: {
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    width: '100%',
  },

  logoText: {
    color: '#606C38',
    textAlign: 'center',
    fontSize: 43,
    fontWeight: '600',
  },
  formContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    backgroundColor: 'rgba(255,236,209,0.2)',
    borderColor: '#606C38',
    borderWidth: 2,
    padding: 10,
    //  elevation: 5,
    paddingLeft: 25,
    borderRadius: 25,
  },
  button: {
    backgroundColor: '#606C38',
    padding: 15,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginLink: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: moderateScale(10),
    flexDirection: 'row',
  },
  loginText: {
    color: '#606C38',
    textAlign: 'center',
  },
});

export default SignUpScreen;
