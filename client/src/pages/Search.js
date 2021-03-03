import React, { useState, useEffect } from 'react';
import API from '../utils/API';
import SearchForm from '../components/SearchForm';
import Header from '../components/Header';

function Search() {
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (!search) {
      return;
    }
    API.searchBooks(search)
      .then(res => {
        if (res.items.length === 0) {
          throw new Error("No results found.");
        }
        setResults(res.items)
      })
      .catch(err => console.error(err))
  }, [search])


  // Form handlers.
  const handleSubmit = event => {
    event.preventDefault();
  }
  const handleInputChange = event => {
    setSearch(event.target.value);
  }

  return (
    <div className="container">
      <Header />
      <SearchForm 
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
      />
    </div>
  )
}

export default Search;