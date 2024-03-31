import React, { useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { CartContext } from '../components/CartContext'; // Adjust the import path as necessary

const CartScreen = ({ navigation }) => {
 const { cartItems, removeFromCart } = useContext(CartContext);

 // Adjusted total price calculation
 const totalPrice = cartItems.reduce((total, item) => total + parseFloat(item.price.replace('₵', '')), 0);

 const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.imageUrl }} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>Price:₵ {item.price}</Text>
      </View>
      <TouchableOpacity style={styles.removeButton} onPress={() => removeFromCart(item.id)}>
        <Text style={styles.removeButtonText}>Remove</Text>
      </TouchableOpacity>
    </View>
 );

 return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Cart</Text>
      <FlatList data={cartItems} keyExtractor={(item) => item.id} renderItem={renderItem} />
      <View style={styles.summaryContainer}>
        <Text style={styles.summaryText}>Total: ₵{totalPrice.toFixed(2)}</Text>
        <TouchableOpacity style={styles.confirmButton} onPress={() => {
          Alert.alert('Order confirmed', 'Your order has been confirmed.', [{ text: 'OK', onPress: () => navigation.navigate('Checkout') }]);
        }}>
          <Text style={styles.confirmButtonText}>Confirm Order</Text>
        </TouchableOpacity>
      </View>
    </View>
 );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 10,
  },
  itemImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 18,
  },
  itemPrice: {
    fontSize: 16,
    color: 'gray',
  },
  removeButton: {
    backgroundColor: '#f44336',
    padding: 5,
    borderRadius: 5,
  },
  removeButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  summaryText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  confirmButton: {
    backgroundColor: '#4caf50',
    padding: 10,
    borderRadius: 5,
  },
  confirmButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default CartScreen;
