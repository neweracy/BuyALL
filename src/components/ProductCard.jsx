// ProductCard.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useContext} from 'react';
import { CartContext} from './cartcontext';
const ProductCard = ({ imageSource, name, price }) => {
    const navigation = useNavigation();
    const { addToCart } = useContext(CartContext);
   
    const handleAddToCart = () => {
       addToCart({ imageUrl: imageSource, name, price });
       navigation.navigate('Cart');
    };
   
    return (
       <View style={styles.card}>
         <Image source={imageSource} style={styles.image} />
         <Text style={styles.name}>{name}</Text>
         <Text style={styles.price}>{price}</Text>
         <Text style={styles.description}>{description}</Text> 
         <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
           <Text style={styles.buttonText}>Add to Cart</Text>
         </TouchableOpacity>
       </View>
    );
   };
const styles = StyleSheet.create({
 card: {
    width: '90%',
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginVertical: 10,
    padding: 10,
 },
 image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
 },
 name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
 },
 price: {
    fontSize: 16,
    color: 'gray',
    marginTop: 5,
 },
 button: {
    backgroundColor: 'blue',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
 },
 buttonText: {
    color: '#fff',
    textAlign: 'center',
 },
});

export default ProductCard;
