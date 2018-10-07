import React, {Component} from 'react'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import {Link} from 'react-router-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import Book from './Book'

class MyList extends Component {

state = {
  query : ''
}


render(){
  console.log(this.props.List )
    return (
      <div>
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                {this.props.List.filter(book => book.shelf === 'currentlyReading')
                  .map(book => (
                    <li key={book.id}>
                      <Book
                        book={book}
                        moveShelf={this.props.moveShelf}
                      />
                    </li>
                  ))
                }
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                {this.props.List.filter(book => book.shelf === 'wantToRead')
                  .map(book => (
                    <li key={book.id}>
                      <Book
                        book={book}
                        moveShelf={this.props.moveShelf}
                      />
                    </li>
                  ))
                }
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                {this.props.List.filter(book => book.shelf === 'read')
                  .map(book => (
                    <li key={book.id}>
                      <Book
                        book={book}
                        moveShelf={this.props.moveShelf}
                      />
                    </li>
                  ))
                }
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="open-search">

            <Link
              to="/Search"
              className="add-contact"
            >Add a book</Link>
        </div>
      </div>
      </div>

    )
}
}

export default MyList;
