import React from 'react'
import './App.css'
import Search from './Search'
import MyList from './MyList'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

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
      </div>
    )
  }
}

export default BooksApp
