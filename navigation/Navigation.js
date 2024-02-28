import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';
import MovieDetailsScreen from '../screens/MovieDetailsScreen';
import MostRatedScreen from '../screens/MostRatedScreen';
import NewReleasedScreen from '../screens/NewReleasedScreen';
import MostWatchedScreen from '../screens/MostWatchedScreen';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="MovieDetails" component={MovieDetailsScreen} />
        <Stack.Screen name="MostRated" component={MostRatedScreen} />
        <Stack.Screen name="NewReleased" component={NewReleasedScreen} />
        <Stack.Screen name="MostWatched" component={MostWatchedScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
