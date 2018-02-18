import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Helmet} from "react-helmet";
import ReactModal from 'react-modal';

import './style.scss';


class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showInquiryRequestModal: false
    };

    this.handleOpenInquiryRequestModal = this.handleOpenInquiryRequestModal.bind(this);
  }

  handleOpenInquiryRequestModal(e) {
    this.setState({showInquiryRequestModal: true});
    e.preventDefault();
  }

  render() {
    const { inquiry } = this.props;

    return (
      <div>
        <Helmet>
          <body className="page-main" />
        </Helmet>

        <div className='container-fluid'>
          <div className='row flex-nowrap no-gutters'>
            <div className='col-md-2 d-none d-md-block sidebar'>
              <div className="brand">
                <i className='far fa-magic' /> Financial AI tes
              </div>
              <ul className='nav flex-column'>
                <li className='nav-item'>
                  <a className='nav-link active' href="#">
                    <i className='link-icon far fa-comment-alt' />
                    Interaction <span className='sr-only'>(current)</span>
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href="#">
                    <i className='link-icon far fa-user' />
                    Profile
                  </a>
                </li>
              </ul>
            </div>
            <main role='main' className='col-md-9 ml-sm-auto col-lg-10 pt-3 px-4'>
              <section className='section-inquiry'>
                <h2>Questions</h2>
                {inquiry.requests ? (
                  <ul>
                    {inquiry.requests.map((item, index) =>
                      <li className='question' key={index}>
                        <div className='question_name'>{item.title}</div>
                        <span className='answer'><a href="#" onClick={this.handleOpenInquiryRequestModal}>answer</a></span>
                      </li>
                    )}
                  </ul>
                ) : (
                  <div>No requests</div>
                )}
              </section>
            </main>
          </div>
        </div>

        <ReactModal isOpen={this.state.showInquiryRequestModal} contentLabel="Minimal Modal Example">
          <button >Close Modal</button>
        </ReactModal>
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
