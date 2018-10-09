import React, {Component} from 'react'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import {Link} from 'react-router-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class Search extends Component {


state = {
  query : '',
  resultBooks: []
}

updateQuery = (query) => {
  this.setState({query: query.trim()})
  this.getSearchResult(query);
}
ClearQuery = () =>{
  this.setState({query: ''})
}

  getSearchResult = (query) => {
    if(query){
      BooksAPI.search(query).then((resultBooks) => {
        if(!resultBooks.error){
          this.setState({resultBooks: resultBooks})
        }else{
          this.setState({resultBooks: []})
        }
      })
    }else{
      this.setState({resultBooks: []})
    }
  }

render(){

    const {query} = this.state

    return (
      <div>

        <div className="search-books">
          <div className="search-books-bar">
            <Link
              to="/"
              className="close-search"
            >Close</Link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title or author"
                value={query}
                onChange={(event) => this.updateQuery(event.target.value)}/>
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">

              {this.state.resultBooks.map(resultBooks => (
                <li key={resultBooks.id}>
                    <Book
                      book={resultBooks}
                    />
                </li>
              ))}
            </ol>
          </div>
        </div>

      </div>

    )
}
}

export default Search;
