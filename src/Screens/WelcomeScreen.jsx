import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import {Bag, Blob} from '../assets/LoadSvg';
import {MotiView} from 'moti';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

const WelcomeScreen = ({navigation}) => {
  const handleGetStarted = () => {
    navigation.navigate('LoginScreen');
  };

  const {width} = useWindowDimensions();

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.blobs}>
          <Blob />
        </View>
        <MotiView
          style={styles.bag}
          from={{opacity: 0, translateY: 50}}
          animate={{opacity: 1, translateY: 0}}
          transition={{delay: 200}}>
          <Bag height={verticalScale(450)} width={scale(350)} />
        </MotiView>
      </View>
      <View style={styles.bottomContainer}>
        <MotiView
          style={styles.textContent}
          from={{opacity: 0, translateY: 50}}
          animate={{opacity: 1, translateY: 0}}
          transition={{delay: 300}}>
          <Text style={styles.title}>BuyALL</Text>
          <Text style={styles.subTitle}>
            Lorem ipsum dolor sit, consectetur adipiscing elit. Pellentesque
            interdum est eget erat commodo finibus.Pellentesque interdum est.
          </Text>
        </MotiView>
        <MotiView
          from={{opacity: 0, translateY: 50}}
          animate={{opacity: 1, translateY: 0}}
          transition={{delay: 400}}>
          <TouchableOpacity
            style={[styles.button, {width: width * 0.79}]}
            onPress={handleGetStarted}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </MotiView>
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
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  blobs: {
    alignItems: 'flex-end', // To align the image to the right
    justifyContent: 'flex-start',
    zIndex: 0,
    flex: 1,
  },
  bag: {
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContent: {
    marginBottom: moderateScale(-30),
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: moderateScale(10),
    textAlign: 'center',
    color: '#606C38',
  },
  subTitle: {
    textAlign: 'center',
    color: '#606C38',
  },
  button: {
    backgroundColor: '#606C38',
    padding: 20,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: moderateScale(40),
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;
