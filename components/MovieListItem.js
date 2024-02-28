import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const MovieListItem = ({ movie, onPress }) => {
  const { title, director, releaseDate } = movie;

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.director}>Directed by: {director}</Text>
        <Text style={styles.releaseDate}>Release Date: {releaseDate}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    elevation: 2, // For Android shadow
    shadowColor: '#000', // For iOS shadow
    shadowOffset: { width: 0, height: 1 }, // For iOS shadow
    shadowOpacity: 0.3, // For iOS shadow
    shadowRadius: 2, // For iOS shadow
  },
  detailsContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  director: {
    fontSize: 16,
    marginBottom: 3,
  },
  releaseDate: {
    fontSize: 14,
    color: '#666',
  },
});

export default MovieListItem;
