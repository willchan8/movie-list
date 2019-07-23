import React from 'react';

class ToWatchTab extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <button onClick={this.props.handleTabClick} value='ToWatch'>To Watch Tab</button>
    )
  }
}

export default ToWatchTab;