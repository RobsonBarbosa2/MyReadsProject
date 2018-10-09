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

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

    moveShelf = (book, shelf) => {
        BooksAPI.update(book, shelf)
        BooksAPI.getAll().then((books) => {
          this.setState({ books })
        })
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
