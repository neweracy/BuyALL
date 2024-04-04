import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  useWindowDimensions,
  KeyboardAvoidingView,
} from 'react-native';
import {FullBlob, Bag} from '../assets/LoadSvg';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

const LoginScreen = ({navigation}) => {
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
  const {width,height} = useWindowDimensions();

  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Log In</Text>
      <View style={styles.topContainer}>
        <View style={styles.blobs}>
          <FullBlob height={verticalScale(300)} width={scale(300)} />
        </View>
        <View style={styles.bag}>
          <Bag height={verticalScale(250)} width={scale(250)} />
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.textContent}>
          <Text style={styles.subText}>
            Lorem ipsum dolor sit, consectetur adipiscing elit. Pellentesque
            interdum est eget erat commodo finibus.Pellentesque interdum est.
          </Text>
        </View>
        <View style={styles.inputField}>
          <TextInput
            style={[
              styles.input,
              {
                marginBottom: 10,
                width: width * 0.8,
              },
            ]}
            placeholder="Email"
            placeholderTextColor="rgba(96,108,56,0.6)"
            onChangeText={setEmail}
            value={email}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={[styles.input, {width: width * 0.8}]}
            placeholder="Password"
            placeholderTextColor="rgba(96,108,56,0.6)"
            onChangeText={setPassword}
            value={password}
            secureTextEntry
          />
        </View>
        <View style={styles.lowerContainer}>
          <TouchableOpacity
            style={[styles.button, {width: width * 0.8}]}
            onPress={handleLogin}>
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.loginLink}
            onPress={() => {
              navigation.navigate('Sign in');
            }}>
            <Text style={styles.loginText}>New Member? </Text>
            <Text style={[styles.loginText, {color: 'blue'}]}>Sign-up</Text>
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
   //  top: moderateScale(0),

     position: 'absolute'
  },
  bag: {
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    width: '100%',
   //  top: moderateScale(50),
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 43,
    color: '#606C38',
    fontWeight: '600',
    marginTop: moderateScale(20),
    marginBottom: moderateScale(10),
  },
  textContent: {
    justifyContent: 'center',
    top: moderateScale(-29),
  },
  subText: {
    textAlign: 'center',
    color: '#606C38',
    marginHorizontal: moderateScale(30),
  },
  inputField: {
    top: moderateScale(-39),
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
    //  marginBottom: moderateScale(40),
    elevation: 6,
    top: moderateScale(-10),
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginLink: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  loginText: {
    textAlign: 'center',
  },
  lowerContainer: {
    top: moderateScale(-39),
    elevation: 5,
  },
});

export default LoginScreen;
