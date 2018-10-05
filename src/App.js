import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import {Link} from 'react-router-dom'
import ListBooks from './ListBooks'
import MyList from './MyList'
import {  BrowserRouter, Route } from 'react-router-dom'
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

  render() {

    return (
      <div className="app">
      
        <Route exact path='/search' render={() => (
            <ListBooks
                books={this.state.books}
            />
        )}/>
        <Route exact path='/' render={() => (
          <MyList/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
