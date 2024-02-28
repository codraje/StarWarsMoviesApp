import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import MovieDetailsScreen from './screens/MovieDetailsScreen';
import MostRatedScreen from './screens/MostRatedScreen';
import NewReleasedScreen from './screens/NewReleasedScreen';
import MostWatchedScreen from './screens/MostWatchedScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#007bff',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Star Wars Movies' }} />
        <Stack.Screen name="MovieDetails" component={MovieDetailsScreen} options={{ title: 'Movie Details' }} />
        <Stack.Screen name="MostRated" component={MostRatedScreen} options={{ title: 'Most Rated Movies' }} />
        <Stack.Screen name="NewReleased" component={NewReleasedScreen} options={{ title: 'New Released Movies' }} />
        <Stack.Screen name="MostWatched" component={MostWatchedScreen} options={{ title: 'Most Watched Movies' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
