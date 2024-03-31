import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { CartContext } from '../components/CartContext'; // Make sure the path is correct
const ProductDetailsScreen = () => {
 const route = useRoute();
 const product = route.params.product;
 const { addToCart } = useContext(CartContext); // Access addToCart from CartContext
 

 
 return (
    <ScrollView contentContainerStyle={styles.container}>
       
      <View style={styles.imageContainer}>
        {product.imageUrl && <Image source={{ uri: product.imageUrl }} style={styles.image} />}
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>{product.price}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <TouchableOpacity
          style={styles.addToCartButton}
          onPress={() => {
            addToCart({
              imageUrl: product.imageUrl,
              name: product.name,
              price: product.price,
              description: product.description,
            });
            alert(`${product.name} added to Cart`);
          }}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
 );
};
const styles = StyleSheet.create({
 container: {
    flexGrow: 1,
    alignItems: 'center',
    paddingVertical: 20,
 },
 imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
 },
 image: {
    width: 300,
    height: 300,
    resizeMode: 'cover',
    borderRadius: 10,
 },
 detailsContainer: {
    paddingHorizontal: 20,
    alignItems: 'center',
 },
 name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
 },
 price: {
    fontSize: 20,
    color: 'green',
    marginBottom: 10,
 },
 description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
 },
 addToCartButton: {
   backgroundColor: '#28a745',
   padding: 10,
   borderRadius: 5,
 },
});

export default ProductDetailsScreen;
