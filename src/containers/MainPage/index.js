import React, { Component } from 'react';
import { connect } from 'react-redux';

import './style.css';


class MainPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='container-fluid page-main'>
        <div className='row'>
          <div className='col-12'>
            <h2>Cashflow</h2>
          </div>
        </div>
        <div className='row'>
          <div className='col-6'>
            <h2>Suggestions</h2>
          </div>
          <div className='col-6'>
            <h2>Questions</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(MainPage);
