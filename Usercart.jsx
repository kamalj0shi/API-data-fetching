import { StyleSheet, Text, View,Image } from 'react-native';
import React from 'react';

const Usercart = ({ data }) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
      <Image  style={styles.avatar} source={{ uri: data.avatar }}  />
        <Text style={styles.text}>Id: {data.id}</Text>
        <Text style={styles.text}>UID: {data.uid}</Text>
        <Text style={styles.text}>Password: {data.password}</Text>
        <Text style={styles.text}>First Name: {data.first_name}</Text>
        <Text style={styles.text}>Last Name: {data.last_name}</Text>
        <Text style={styles.text}>Username: {data.username}</Text>
        <Text style={styles.text}>Email: {data.email}</Text>
      </View>
    </View>
  );
};

export default Usercart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#f8f8f8',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50, 
    marginBottom: 20
  },
  card: {
    width: '100%',
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
     alignItems: 'center'

    
  },
  text: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
});
