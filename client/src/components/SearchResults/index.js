import React from 'react';

function SearchResults(props) {

  return (
    <div className="row border m-5 p-5">
      <h3 className="col-12">Results</h3>
      {
        props.results.map((book, index) => {
          // if (index < 20) {
            <div className="row border m-2 p-2">
              <h4 className="col-10">{book.volumeInfo.title}</h4>
              <button className="col-1">View</button>
              <button className="col-1">Save</button>
              <h6 className="col-12">{book.volumeInfo.authors}</h6>
              <img className="col-3" width="150"
                src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.smallThumbnail : "https://via.placeholder.com/150?text=no+image+available"} 
              />
              <p className="col-9">{book.volumeInfo.description}</p>
            </div>
          // }
        })
      }
    </div>
  )
}

export default SearchResults;