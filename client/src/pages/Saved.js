import React, { Component } from 'react';
import API from '../utils/API';
import Header from '../components/Header';

const style = {
  img: {
    objectFit: "contain",
  }
}

class Saved extends Component {
  state = {
    books: [],
  };

  componentDidMount() {
    API.getBooks()
    .then(books => {
      this.setState({ books: books.data })
    }).catch(err => console.error(err));
  }

  componentDidUpdate() {
    API.getBooks()
    .then(books => {
      this.setState({ books: books.data })
    }).catch(err => console.error(err));
  }

  deleteBook = (id) => {
    API.deleteBook(id)
      .then(res => {
        console.log("Book deleted!")
      }).catch(err => console.error(err));
  }

  handleButtonClick = event => {
    event.preventDefault();
    let id = event.target.getAttribute('data-id');
    this.deleteBook(id)
  }

  render() {
    return (
      <div className="container">
        <Header />
        {
        this.state.books.map(({ _id, title, authors, description, image, link }) => {
          return (
            <div className="row border m-2 p-2" key={_id}>
              <h4 className="col-11">{title}</h4>
              <button className="col-1 btn btn-danger" onClick={this.handleButtonClick} data-id={_id}>Delete</button>
              <h6 className="col-12">{authors}</h6>
              <img className="col-3" width="100" style={style.img} alt={title}
                src={image ? image : "https://via.placeholder.com/100?text=no+image+available"} 
              />
              <p className="col-9">{description}</p>
              <p className="col-12">{link}</p>
            </div>
          )
        })
      }
      </div>
    )
  }
}

export default Saved;