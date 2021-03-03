import React, { Component } from 'react';
import API from '../utils/API';
import Header from '../components/Header';

class Saved extends Component {
  state = {
    books: []
  };



  render() {
    return (
      <div className="container">
        <Header />
      </div>
    )
  }
}

export default Saved;