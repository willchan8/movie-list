import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      addNewMovie: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let text = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);
    this.setState({ addNewMovie: text });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleAdd(this.state.addNewMovie);
    this.setState({addNewMovie: ''});
  }
  
  render() {
    return (
      <div className="Add">
        <form className="AddMovie" onSubmit={this.handleSubmit}>
          <label>
            Add Movie:
            &nbsp;
            <input type="text" value={this.state.addNewMovie} placeholder="Add Movie Title Here" onChange={this.handleChange} />
          </label>
          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }
}

export default AddMovie;