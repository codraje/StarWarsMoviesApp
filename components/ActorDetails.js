import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const ActorDetails = ({ actor }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{actor.name}</Text>
      <Text style={styles.role}>{actor.role}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  role: {
    fontSize: 16,
    color: '#666',
  },
});

export default ActorDetails;
