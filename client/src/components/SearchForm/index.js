import React from 'react';

function SearchForm(props) {

  return (
    <form className="row border m-5 p-5" onSubmit={props.handleSubmit}>
      <div className="col-12 mb-3">
        <h3>Book Search</h3>
      </div>
      <div className="col-12">
        <input type="text" className="form-control" placeholder="Search by title or author" 
          value={props.search}
          onChange={props.handleInputChange}
        />
      </div>
    </form>
  )
}

export default SearchForm;