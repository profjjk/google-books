import React, { Component } from 'react';
import API from '../utils/API';
import Header from '../components/Header';
import SearchForm from '../components/SearchForm';
import SearchResults from '../components/SearchResults';

class Search extends Component {
  state = {
    search: "",
    results: [],
  };

  // Functions.
  searchBooks = search => {
    if (search === "") {
      return;
    }
    API.searchBooks(search)
      .then(res => {
        console.log(res)
        this.setState({ results: res.data.items })
      })
  }


  // Form handlers.
  handleSubmit = event => {
    event.preventDefault();
    this.searchBooks(this.state.search)
  };
  handleInputChange = event => {
    this.setState({ search: event.target.value})
  };

  render() {
    return (
      <div className="container">
        <Header />
        <SearchForm 
          value={this.state.search}
          handleSubmit={this.handleSubmit}
          handleInputChange={this.handleInputChange}
        />
        {
          this.state.search !== "" ? 
          (<SearchResults 
            results={this.state.results}
          />
          ) : (
          <p className="text-center">No results to display</p>)
        }
      </div>
    )
  }
}

export default Search;