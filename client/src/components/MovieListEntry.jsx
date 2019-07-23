import React from 'react';

class MovieListEntry extends React.Component {
  constructor(props) {
    super(props);

    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick(e) {
    this.props.handleClickWatched(e);
  }
  
  render() {

    const buttonText = this.props.movie.watched ? 'Watched' : 'To Watch';

    return (
     <div className="MovieListEntry">
       {this.props.movie.title}
       <button className="watchedButton" value={this.props.movie.title} onClick={this.onButtonClick}>{buttonText}</button>
     </div>
    )
  }
}

export default MovieListEntry;
