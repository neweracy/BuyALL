// Import necessary modules
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { View, Text, StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import WelcomeScreen from '../Screens/WelcomeScreen';
import LoginScreen from '../Screens/LoginScreen';
import ProductDetailsScreen from '../Screens/ProductDetailsScreen';
import HomeScreen from '../Screens/HomeScreen';
import UserScreen from '../Screens/UserScreen';
import SignUpScreen from '../Screens/SignupScreen';
import CartScreen from '../Screens/CartScreen';
import { CartProvider } from '../components/CartContext';
import Checkout from '../Screens/Checkout';

// Create the bottom tab navigator
const Tab = createBottomTabNavigator();

// Create the stack navigator
const Stack = createStackNavigator();

// Define the home component with the bottom tab navigator
function HomeStack() {
 return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#6200ee',
        tabBarInactiveTintColor: '#212121',
        tabBarStyle: { backgroundColor: '#fff' },
        tabBarShowLabel: true,
        
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <AntDesign name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialIcons name="shopping-cart" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={UserScreen}
        options={{
          tabBarIcon: ({color}) => (
            <AntDesign name="user" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
 );
}

// Define the main app navigator
const AppNavigator = () => {
 return (
 <CartProvider>
     <NavigationContainer>
      <Stack.Navigator initialRouteName="WelcomeScreen">
        <Stack.Screen name="WelcomeScreen" options={{headerShown: false}} component={WelcomeScreen} headerShown={false}/>
        <Stack.Screen name="LoginScreen" options={{headerShown: false}} component={LoginScreen} />
        <Stack.Screen name="Sign in" component={SignUpScreen} />
        <Stack.Screen name="ProductDetailsScreen" component={ProductDetailsScreen} />
        <Stack.Screen name="Cart" component={CartScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Checkout" component={Checkout} />
        <Stack.Screen
          name="HomeS"
          component={HomeStack}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
 </CartProvider>
 );
};

export default AppNavigator;
