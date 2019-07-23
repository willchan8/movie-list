import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let text = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);
    this.setState({ search: text });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSearch(this.state.search);
    this.setState({search: ''})
  }

  render() {
    return (
      <div className="Search">
        <form onSubmit={ this.handleSubmit }>
          <label>
            Search:
            &nbsp;
            <input type="text" name="search" value={ this.state.search } placeholder="Search Movie..." onChange={ this.handleChange } />
          </label>
          <input type="submit" value="Go!" />
        </form>
      </div>
    )
  }
}

export default SearchBar;
