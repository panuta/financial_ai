import React, { Component } from 'react';
import { connect } from 'react-redux';

import Onboarding from '../Onboarding';
import MainPage from '../MainPage';

import 'bootstrap/dist/css/bootstrap.css';


class App extends Component {
  render() {
    const { onboarding } = this.props;

    return (
      <div className='App'>
        {onboarding ? (
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

export default connect(
  mapStateToProps,
)(App);
