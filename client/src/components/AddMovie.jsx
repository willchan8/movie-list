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
    this.setState({ addNewMovie: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleAdd(this.state.addNewMovie);
  }
  
  render() {
    return (
      <form className="AddMovie" onSubmit={ () => this.props.handleAdd(event, this.state.addNewMovie)}>
        <label>
          Add Movie:
          &nbsp;
          <input type="text" value={this.state.value} placeholder="Add Movie..." onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default AddMovie;