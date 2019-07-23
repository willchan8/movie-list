import React from 'react';
import axios from 'axios';
import SampleMovieData from '../../data/SampleMovieData.js';
import MovieList from './MovieList.jsx';
import SearchBar from './SearchBar.jsx';
import AddMovie from './AddMovie.jsx';
import WatchedTab from './WatchedTab.jsx';
import ToWatchTab from './ToWatchTab.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      watchedMovies: SampleMovieData,
      moviesToWatch: [],
      searchedMovie: '',
      searched: false,
      addedMovie: '',
      activeTab: 'Watched'
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleTabClick = this.handleTabClick.bind(this);
    this.handleClickWatched = this.handleClickWatched.bind(this);
  }

  handleSearch(searchResult) {
    if (searchResult === '') {
      this.setState({
        searchedMovie: '',
        searched: false
      })
    } else {
      let movieList = this.state.activeTab === 'Watched' ? this.state.watchedMovies : this.state.moviesToWatch;
      
      let searchedMovie = movieList.filter(movie => (movie.title.includes(searchResult)));
      this.setState({
        searchedMovie: searchedMovie,
        searched: true
      });
    }
  }

  handleAdd(movie) {
    if (this.state.activeTab === 'Watched') {
      let newList = this.state.watchedMovies.slice(0);
      newList.push({title: movie, watched: true});
      this.setState({watchedMovies: newList});
    } else if (this.state.activeTab === 'ToWatch') {
      let newList = this.state.moviesToWatch.slice(0);
      newList.push({title: movie, watched: false});
      this.setState({moviesToWatch: newList});
    }
  }

  handleTabClick(e) {
    this.setState({activeTab: e.target.value});
  }

  handleClickWatched(e) {
    if (this.state.activeTab === 'Watched') {
      let watchedMovies = this.state.watchedMovies.filter(movie => movie.title !== e.target.value);
      let moviesToWatch = this.state.moviesToWatch.slice(0);
      moviesToWatch.push({title: e.target.value, watched: false});

      this.setState({
        watchedMovies: watchedMovies,
        moviesToWatch: moviesToWatch
      })
    } else if (this.state.activeTab === 'ToWatch') {
      let moviesToWatch = this.state.moviesToWatch.filter(movie => movie.title !== e.target.value);
      let watchedMovies = this.state.watchedMovies.slice(0);
      watchedMovies.push({title: e.target.value, watched: true});

      this.setState({
        watchedMovies: watchedMovies,
        moviesToWatch: moviesToWatch
      })
    }
  }

  render() {
    const { watchedMovies, moviesToWatch, searchedMovie, searched, activeTab } = this.state;
    return (
      <div>
        <h1 className="title">Movie List</h1>
        <AddMovie handleAdd={this.handleAdd} />
        <SearchBar handleSearch={this.handleSearch} />
        <WatchedTab handleTabClick={this.handleTabClick} />
        <ToWatchTab handleTabClick={this.handleTabClick} />
        <MovieList 
          watchedMovies={searched ? searchedMovie : watchedMovies} 
          moviesToWatch={searched ? searchedMovie : moviesToWatch} 
          handleClickWatched={this.handleClickWatched}
          activeTab={activeTab}
        />
      </div>
    );
  }
}

export default App;
