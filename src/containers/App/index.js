import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader'

import Onboarding from '../Onboarding';
import MainPage from '../MainPage';

import 'bootstrap/dist/css/bootstrap.css';


class App extends Component {
  render() {
    const { onboarding } = this.props;

    return (
      <div className='App'>
        {onboarding === undefined || onboarding ? (
          <Onboarding/>
        ) : (
          <MainPage/>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    onboarding: state.app.onboarding
  }
};

// export default connect(
//   mapStateToProps,
// )(App);

// hot(module)(App)

export default hot(module)(connect(
  mapStateToProps,
)(App));
