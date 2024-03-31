// Checkout.js
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Checkout = ({ navigation }) => {
 return (
    <View style={styles.container}>
      <Text style={styles.title}>Checkout</Text>
      {/* Add your checkout form or summary here */}
      <Button
        title="Proceed to Payment"
        onPress={() => {
          // Implement your payment logic here
          console.log('Proceeding to payment');
        }}
      />
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
 },
});

export default Checkout;
