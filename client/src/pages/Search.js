import React, { Component } from 'react';
import API from '../utils/API';
import Header from '../components/Header';
import SearchForm from '../components/SearchForm';
import SearchResults from '../components/SearchResults';

class Search extends Component {
  state = {
    search: "",
    results: [],
    book: []
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
  
  saveBook = id => {
    if (id === "") {
      return;
    }
    API.searchBook(id)
      .then(book => {
        console.log(book)
        API.saveBook({
          title: book.data.volumeInfo.title,
          authors: book.data.volumeInfo.authors.join(", "),
          description: book.data.volumeInfo.description,
          image: book.data.volumeInfo.imageLinks.smallThumbnail,
          link: book.data.volumeInfo.infoLink
        }).catch(err => console.error(err));
      }).catch(err => console.error(err));
  }


  // Form handlers.
  handleSubmit = event => {
    event.preventDefault();
    this.searchBooks(this.state.search)
  };
  handleInputChange = event => {
    this.setState({ search: event.target.value})
  };
  handleButtonClick = event => {
    event.preventDefault();
    console.log(event.target.getAttribute('data-id'))
    this.saveBook(event.target.getAttribute('data-id'))
  }

  render() {
    return (
      <div className="container">
        <Header />
        <SearchForm 
          value={this.state.search}
          handleSubmit={this.handleSubmit}
          handleInputChange={this.handleInputChange}
        />
        <SearchResults 
          results={this.state.results}
          handleButtonClick={this.handleButtonClick}
        />
      </div>
    )
  }
}

export default Search;