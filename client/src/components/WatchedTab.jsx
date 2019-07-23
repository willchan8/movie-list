import React from 'react';

class WatchedTab extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <button onClick={this.props.handleTabClick} value="Watched">Watched Tab</button>
    )
  }
}

export default WatchedTab;