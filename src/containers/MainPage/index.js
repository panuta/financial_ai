import React, { Component } from 'react';
import { connect } from 'react-redux';

import './style.scss';


class MainPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { inquiry } = this.props;

    return (
      <div className='page-main'>
        <nav className="navbar navbar-expand-lg navbar-dark">
          <a className="navbar-brand" href="#">Financial AI</a>
        </nav>
        <div className='container-fluid'>
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
              <section className='section-inquiry'>
                <h2>Questions</h2>
                <ul>
                  {inquiry.map((item, index) => <li className='question' key={index}>{item.question_name}</li>)}
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    inquiry: state.inquiry
  }
};

export default connect(
  mapStateToProps,
)(MainPage);
