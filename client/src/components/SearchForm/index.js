import React from 'react';

function SearchForm() {
  return (
    <form className="row border m-5 p-5">
      <div className="col-12 mb-3">
        <h3>Book Search</h3>
      </div>
      <div className="col-12">
        <input type="text" className="form-control" placeholder="Search by title or author" />
      </div>
    </form>
  )
}

export default SearchForm;