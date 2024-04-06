import React from 'react';
import {View, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';

const Preloader = () => {
  return (
    <View style={styles.container}>
      <LottieView
        source={require('../assets/Animation.json')}
        style={{width: '100%', height: '100%'}}
        autoPlay
        loop
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255,236,209,1)',
  },
});

export default Preloader;
