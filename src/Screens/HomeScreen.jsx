import React, { useContext,useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image,TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CartContext } from '../components/CartContext'; // Import CartContext
import { Cloudinary } from "@cloudinary/url-gen";
import products from '../Products/Product';//Import the products so that the flatlist will be able to read data
import { ScrollView } from 'react-native-gesture-handler';

const HomeScreen = () => {
  const navigation = useNavigation();
  const { addToCart } = useContext(CartContext); // Use CartContext
  const [searchQuery, setSearchQuery] = useState(''); // State for the search query

  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dwrhh1fni'
    }
  });
   // Function to filter products based on the search query
 const filteredProducts = products.filter(product =>
  product.name.toLowerCase().includes(searchQuery.toLowerCase())
);



  return (
   
  <View>
    <View>
      <Text style={styles.title}>Welcome to TechTen Planet</Text>
    </View>
    <View>
    <TextInput style={styles.searchBar}
    placeholder="Search Products..."
    onChangeText={setSearchQuery}
    value={searchQuery}/>
    </View>
      
<ScrollView> 
<View style={styles.container}> 
  <FlatList
    data={filteredProducts}
    keyExtractor={(item) => item.id.toString()}
    horizontal={true}
    showsHorizontalScrollIndicator={false}
    ListEmptyComponent={() => (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>🤔</Text>
        <Text style={styles.emptyText}>🤔😔 Sorry no items found.</Text>
      </View>
    )}
    renderItem={({ item }) => {
      if (filteredProducts.length === 0) {
        return null; // Do not render anything if no items are found
      }
      const imageUrl = cld.image(item.imageUrl).toString();
      console.log("Image URL:", imageUrl); // Log the image URL
      return (
        <TouchableOpacity
          key={item.id} // Add the key prop here
          activeOpacity={0.8}
          style={styles.productCard}
          onPress={() =>
            navigation.navigate('ProductDetailsScreen', {
              product: {
                imageUrl: item.imageUrl,
                name: item.name,
                price: item.price,
                description: item.description,
              },
            })
          }>
          <Image
            source={{ uri: item.imageUrl }}
            style={styles.productImage}
            onError={(error) => console.error("Image loading error:", error)}
          />
          <Text style={styles.productName}>{item.name}</Text>
          <Text style={styles.productPrice}>Price:₵{item.price}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.viewDetailsButton}
              onPress={() =>
                navigation.navigate('ProductDetailsScreen', {
                  product: {
                    imageUrl: item.imageUrl,
                    name: item.name,
                    price: item.price,
                    description: item.description,
                  },
                })
              }>
              <Text style={styles.buttonTextSmall}>View Details</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.addToCartButton}
              onPress={() => {
                addToCart({
                  imageUrl: item.imageUrl,
                  name: item.name,
                  price: item.price,
                  description: item.description,
                });
                alert(`${item.name} added to Cart`);
              }}>
              <Text style={styles.buttonText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      );
    }}
  />
</View>
<View style={styles.container}>
  <FlatList
    data={filteredProducts}
    keyExtractor={(item) => item.id.toString()}
    horizontal={true}
    showsHorizontalScrollIndicator={false}
    renderItem={({ item }) => {
      const imageUrl = cld.image(item.imageUrl).toString();
      console.log("Image URL:", imageUrl); // Log the image URL
      return (
        <TouchableOpacity
          key={item.id} // Add the key prop here
          activeOpacity={0.8}
          style={styles.productCard}
          onPress={() =>
            navigation.navigate('ProductDetailsScreen', {
              product: {
                imageUrl: item.imageUrl,
                name: item.name,
                price: item.price,
                description: item.description,
              },
            })
          }>
          <Image
            source={{ uri: item.imageUrl }}
            style={styles.productImage}
            onError={(error) => console.error("Image loading error:", error)}
          />
          <Text style={styles.productName}>{item.name}</Text>
          <Text style={styles.productPrice}>Price:₵{item.price}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.viewDetailsButton}
              onPress={() =>
                navigation.navigate('ProductDetailsScreen', {
                  product: {
                    imageUrl: item.imageUrl,
                    name: item.name,
                    price: item.price,
                    description: item.description,
                  },
                })
              }>
              <Text style={styles.buttonTextSmall}>View Details</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.addToCartButton}
              onPress={() => {
                addToCart({
                  imageUrl: item.imageUrl,
                  name: item.name,
                  price: item.price,
                  description: item.description,
                });
                alert(`${item.name} added to Cart`);
              }}>
              <Text style={styles.buttonText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      );
    }}
  />
</View>

</ScrollView>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    

  },
  title:{
    fontSize: 20,
    fontWeight: 'bold',
    marginTop:5,
    marginBottom: 5,
    justifyContent:'center',
    alignSelf: 'center',
    color:'blue',

  },
  productCard: {
    borderWidth: 3,
    borderColor: '#606C38',
    borderRadius: 8,
    padding: 10,
    margin:8,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#FFECD1',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: 240,
    height: 310,
  },
  productImage: {
    width: 150,
    height: 150,
    borderRadius: 5,
    marginBottom: 5,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 18,
    color: '#888',
    marginBottom: 5,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  viewDetailsButton: {
    backgroundColor: '#007BFF',
    padding: 5,
    borderRadius: 5,
    marginRight: 10,
  },
  addToCartButton: {
    backgroundColor: '#28a745',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
  buttonTextSmall: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
  },
  searchBar: {
    height: 40,
    borderColor: '#606C38',
    borderWidth: 1,
    paddingLeft: 10,
    margin: 10,
    borderRadius: 5,
 },
 emptyContainer: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
},
emptyText: {
  fontSize: 25,
  textAlign: 'center',
},

});

export default HomeScreen;
