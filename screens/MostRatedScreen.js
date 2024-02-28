import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, ActivityIndicator } from 'react-native';
import { useQuery } from '@apollo/client';
import { GET_STAR_WARS_FILMS } from '../utils/graphql';
import MovieListItem from '../components/MovieListItem';

const MostRatedScreen = () => {
  const { loading, error, data } = useQuery(GET_STAR_WARS_FILMS);
  const [mostRatedMovies, setMostRatedMovies] = useState([]);

  useEffect(() => {
    if (!loading && data) {
      // Sort movies by rating (episodeID in this case)
      const sortedMovies = data.allFilms.films.sort((a, b) => a.episodeID - b.episodeID);
      setMostRatedMovies(sortedMovies);
    }
  }, [loading, data]);

  if (loading) return <ActivityIndicator size="large" color="#0000ff" />;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Most Rated Movies</Text>
      <FlatList
        data={mostRatedMovies}
        renderItem={({ item }) => <MovieListItem movie={item} />}
        keyExtractor={item => item.episodeID.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default MostRatedScreen;
