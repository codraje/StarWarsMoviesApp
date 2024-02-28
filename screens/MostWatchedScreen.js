import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const MostWatchedScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Most Watched Movies</Text>
      {/* Add your UI components for displaying most watched movies */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default MostWatchedScreen;
