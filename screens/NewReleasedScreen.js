import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useQuery, gql } from '@apollo/client';

// GraphQL query to fetch new released Star Wars films
const GET_NEW_RELEASED_FILMS = gql`
  {
    allFilms(orderBy: releaseDate_ASC) {
      films {
        title
        director
        releaseDate
      }
    }
  }
`;

const NewReleasedScreen = ({ navigation }) => {
  const { loading, error, data } = useQuery(GET_NEW_RELEASED_FILMS);

  if (loading) return <ActivityIndicator size="large" color="#0000ff" />;
  if (error) return <Text>Error fetching data</Text>;

  return (
    <View style={styles.container}>
      <FlatList
        data={data.allFilms.films}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => navigation.navigate('MovieDetails', { movie: item })}
          >
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemText}>Director: {item.director}</Text>
            <Text style={styles.itemText}>Release Date: {item.releaseDate}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  itemContainer: {
    marginBottom: 20,
    borderWidth: 1,
    padding: 10,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  itemText: {
    fontSize: 16,
  },
});

export default NewReleasedScreen;
