import axios from 'axios';

export default {
  // Get all books from database.
  getBooks: () => {
    return axios.get('/api/books');
  },
  // Save book data to database.
  saveBook: data => {
    return axios.post('/api/books', data);
  },
  // Delete book from database.
  deleteBook: id => {
    return axios.delete('/api/books' + id);
  },
  // Search books by search term.
  searchBooks: name => {
    return axios.get('https://www.googleapis.com/books/v1/volumes?q=' + name)
  },
  // Search for single book.
  searchBook: id => {
    return axios.get('https://www.googleapis.com/books/v1/volumes/' + id)
  }
}