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
    this.setState({ search: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSearch(this.state.search);
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
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default SearchBar;
