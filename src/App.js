import React from 'react'
import './App.css'
import Search from './Search'
import MyList from './MyList'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class BooksApp extends React.Component {


  state = {
    books: []
  }

  async componentDidMount() {
    const books = await BooksAPI.getAll()
    this.setState({ books })
  }

    moveShelf = (book, shelf) => {

        BooksAPI.update(book, shelf)
        book.shelf = shelf;
        this.setState({books: this.state.books.filter((b) => b.id !== book.id).concat(book)})

        toast.success('Moved successfully!');
    }

  render() {
    const {books} = this.state
    return (
      <div className="app">
        <Route exact path='/Search' render={() => (
            <Search
              moveShelf={this.moveShelf}
              books={books}
            />
        )}/>
        <Route exact path='/' render={() => (
          <MyList
            List = {books}
            moveShelf={this.moveShelf}
          />
        )}/>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover
          />
      </div>
    )
  }
}

export default BooksApp
