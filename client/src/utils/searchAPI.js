import axios from 'axios';

export default {
  // Search all books.
  searchBooks: name => {
    return axios.get('https://www.googleapis.com/books/v1/volumes?q=' + name)
  },
  // Search for single book.
  searchBook: id => {
    return axios.get('https://www.googleapis.com/books/v1/volumes/' + id)
  }
}