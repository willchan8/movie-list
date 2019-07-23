import React from 'react';
import MovieListEntry from './MovieListEntry.jsx';

class MovieList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {watchedMovies, moviesToWatch, handleClickWatched, activeTab} = this.props;
    const movieList = activeTab === 'Watched' ? watchedMovies : moviesToWatch;

    return (
      <div className="MovieList">
        {movieList.map((movie) => <MovieListEntry key={movie.title} movie={movie} handleClickWatched={handleClickWatched}/> )}
      </div>
    )
  }
}

export default MovieList;