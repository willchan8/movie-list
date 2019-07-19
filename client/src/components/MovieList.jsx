import React from 'react';
import MovieListEntry from './MovieListEntry.jsx';
// Import MovieListEntry so we can pass each movie as a prop to MovieListEntry via map

// The 'movies' prop (array of movies) was passed in from App.jsx
// Each movie will be mapped over to MoveListEntry to be enclosed in a div
class MovieList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="MovieList">
        {this.props.movies.map((movie, index) => <MovieListEntry key={index} movie={movie} /> )}
      </div>
    )
  }
}

export default MovieList;

// {this.props.movies.map( (movie, index) => (
//   <MovieListEntry key={index} movie={movie} />
// ))}