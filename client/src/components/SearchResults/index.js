import React from 'react';

const style = {
  img: {
    objectFit: "contain",
  }
}

function SearchResults(props) {

  return (
    <div className="row border m-5 p-5">
      <h3 className="col-12">Results</h3>
      {
        props.results.map((book, index) => {
          return (
            <div className="row border m-2 p-2" key={book.id}>
              <h4 className="col-11">{book.volumeInfo.title}</h4>
              <button className="col-1 btn btn-warning" onClick={props.handleButtonClick} data-id={book.id}>Save</button>
              <h6 className="col-12">{book.volumeInfo.authors}</h6>
              <img className="col-3" width="100" style={style.img} alt={book.volumeInfo.title}
                src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.smallThumbnail : "https://via.placeholder.com/100?text=no+image+available"} 
              />
              <p className="col-9">{book.volumeInfo.description}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default SearchResults;