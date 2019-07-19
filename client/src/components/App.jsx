import React from 'react';
import MovieList from './MovieList.jsx';
import SampleMovieData from '../../data/SampleMovieData.js';
import SearchBar from './SearchBar.jsx';
import AddMovie from './AddMovie.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: SampleMovieData,
      searchedMovie: '',
      addedMovie: '',
      searched: false
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleSearch(searchResult) {
    let searchedMovie = this.state.movies.filter(movie => (movie.title === searchResult));
    this.setState({
      searchedMovie: searchedMovie,
      searched: true
    });
  }

  handleAdd(movie) {
    let newList = this.state.movies.slice(0);
    newList.push({title: movie});
    this.setState({movies: newList});
  }

  render() {
    const { movies, searchedMovie, searched } = this.state;
    return (
      <div>
        <h1 className="title">Movie List</h1>
        <div className="SearchBar">
          <SearchBar handleSearch={this.handleSearch} />
        </div>
        <div className="Add">
          <AddMovie handleAdd={this.handleAdd} />
        </div>
        <div className="movieList">
          <MovieList movies={searched ? searchedMovie : movies} />
        </div>
      </div>
    );
  }
}

export default App;
