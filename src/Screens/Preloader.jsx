import {create} from 'lodash';
import React from 'react';
// import {ActivityIndicator} from 'react-native';
import {StyleSheet, View, ActivityIndicator} from 'react-native';

const Preloader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'rgba(255,236,209,0.4)',
  },
});

export default Preloader;
