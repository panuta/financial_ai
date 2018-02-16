import React, { Component } from 'react';
import { connect } from 'react-redux';

import './style.css';
import { onboardUser } from '../../store/actions/app';


let onboardingHandler = function(dispatch) {
  let dispatchOnboardUser = function(personName) {
    dispatch(onboardUser(personName))
  };

  return {
    dispatchOnboardUser,
  };
};


class Onboarding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personName: ''
    };

    this.changePersonNameInput = this.changePersonNameInput.bind(this);
    this.clickGetStarted = this.clickGetStarted.bind(this);

    this.onboardingHandler = onboardingHandler(this.props.dispatch);
  }

  changePersonNameInput(e) {
    this.setState({personName: e.target.value});
  }

  clickGetStarted(e) {
    this.onboardingHandler.dispatchOnboardUser(this.state['personName']);
    e.preventDefault();
  }

  render() {
    return (
      <div className='container-fluid page-onboarding'>
        <h1>Welcome to Financial AI</h1>
        <div>
          <p>To get started, please enter your name below.</p>
          <div className='row justify-content-md-center'>
            <div className='col-md-4'>
              <form>
                <div className='form-group'>
                  <label htmlFor='id_personName'>Your name</label>
                  <input type='text' className='form-control' id='id_personName' onChange={this.changePersonNameInput} />
                </div>
                <button className='btn btn-primary' onClick={this.clickGetStarted}>Get Started</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(Onboarding);
