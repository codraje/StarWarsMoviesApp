import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

// Create a new ApolloClient instance
const client = new ApolloClient({
  uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
  cache: new InMemoryCache(),
});

// Define GraphQL queries
const GET_STAR_WARS_FILMS = gql`
  {
    allFilms {
      films {
        title
        episodeID
        director
        releaseDate
      }
    }
  }
`;

// Define GraphQL mutations if needed
// const ADD_STAR_WARS_FILM = gql`
//   mutation AddStarWarsFilm($input: AddStarWarsFilmInput!) {
//     addStarWarsFilm(input: $input) {
//       title
//       director
//       releaseDate
//     }
//   }
// `;

export { client, GET_STAR_WARS_FILMS };
