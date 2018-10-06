import React, {Component} from 'react'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import {Link} from 'react-router-dom'
import { BrowserRouter, Route } from 'react-router-dom'

class MyList extends Component {


state = {
  query : ''
}


render(){
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
                  <li>


                  </li>
                  <li>

                  </li>
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  <li>

                  </li>
                  <li>

                  </li>
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  <li>

                  </li>
                  <li>

                  </li>
                  <li>
                  
                  </li>
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
