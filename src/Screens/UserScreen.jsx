import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { IconButton } from 'react-native-paper'; // Importing IconButton from react-native-paper

const UserScreen = () => {
 const [userProfile, setUserProfile] = useState({
    username: 'John Doe',
    phoneNumber: '+1234567890',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    location: 'New York, USA',
    profileImage: 'https://res.cloudinary.com/dwrhh1fni/image/upload/v1711543329/Techten/pi-top_with_Robotics_Kit_zolrxf.png'
 });

 const [phoneNumber, setPhoneNumber] = useState(userProfile.phoneNumber);
 const [details, setDetails] = useState(userProfile.details);
 const [location, setLocation] = useState(userProfile.location);

 const changeProfileImage = () => {
    setUserProfile({
      ...userProfile,
      profileImage: 'https://res.cloudinary.com/dwrhh1fni/image/upload/v1711543329/Techten/pi-top_with_Robotics_Kit_zolrxf.png'
    });
 };

 return (
    <View style={styles.container}>
      <TouchableOpacity onPress={changeProfileImage}>
        <Image source={{ uri: userProfile.profileImage }} style={styles.profileImage} />
        <Text style={styles.changeImageText}>Change Profile Image</Text>
      </TouchableOpacity>
      <View style={styles.userInfoContainer}>
        <Text style={styles.label}>Username:</Text>
        <Text style={styles.info} selectable={false}>{userProfile.username}</Text>
        <View style={styles.editableField}>
          <TextInput
            style={styles.info}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            placeholder="Phone Number"
          />
          <IconButton 
            icon="pencil" 
            size={20}
            color="#606C38"
            onPress={() => {}}
          />
        </View>
        <View style={styles.editableField}>
          <TextInput
            style={styles.info}
            value={details}
            onChangeText={setDetails}
            placeholder="Details"
          />
          <IconButton 
            icon="pencil" 
            size={20}
            color="#606C38"
            onPress={() => {}}
          />
        </View>
        <View style={styles.editableField}>
          <TextInput
            style={styles.info}
            value={location}
            onChangeText={setLocation}
            placeholder="Location"
          />
          <IconButton 
            icon="pencil" 
            size={20}
            color="#606C38"
            onPress={() => {}}
          />
        </View>
      </View>
    </View>
 );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    alignItems: 'center',
    padding: 20
 },
 profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20
 },
 changeImageText: {
    color: 'blue',
    marginBottom: 20
 },
 userInfoContainer: {
    width: '100%'
 },
 label: {
    color: '#606C38',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5
 },
 info: {
    color: 'black',
    fontSize: 16,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#606C38',
    borderRadius: 5,
    padding: 5,
    width: '80%'
 },
 editableField: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15
 }
});

export default UserScreen;
