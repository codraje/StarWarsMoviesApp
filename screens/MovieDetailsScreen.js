import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

const MovieDetailsScreen = ({ route }) => {
  const { title, director, releaseDate, actors, author } = route.params.movie;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.detailContainer}>
        <Text style={styles.detailLabel}>Director:</Text>
        <Text style={styles.detailText}>{director}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.detailLabel}>Release Date:</Text>
        <Text style={styles.detailText}>{releaseDate}</Text>
      </View>
      <Text style={styles.sectionTitle}>Actors:</Text>
      <View style={styles.actorContainer}>
        {actors.map((actor, index) => (
          <Text key={index} style={styles.actorText}>{actor}</Text>
        ))}
      </View>
      <Text style={styles.sectionTitle}>Author:</Text>
      <Text style={styles.authorText}>{author}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  detailContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  detailLabel: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  detailText: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  actorContainer: {
    marginBottom: 20,
  },
  actorText: {
    fontSize: 16,
    marginBottom: 5,
  },
  authorText: {
    fontSize: 16,
  },
});

export default MovieDetailsScreen;
