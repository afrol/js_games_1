import React, { Component } from 'react';
import PropTypes from 'prop-types';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title">{this.props.message}</h1>
      </div>
    );
  }
}

App.propTypes = {
  message: PropTypes.string.isRequired,
};

export default App;
