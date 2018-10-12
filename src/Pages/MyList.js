import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Book from '../Components/Book'
import BookShelf from '../Components/BookShelf'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class MyList extends Component {

state = {
  query : ''
}

render(){
  const {moveShelf} = this.props
  const {List} = this.props
    return (
      <div>
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf books={List} moveShelf={moveShelf} shelf="currentlyReading" label="Currently Reading"/>
            <BookShelf books={List} moveShelf={moveShelf} shelf="wantToRead" label="Want To Read"/>
            <BookShelf books={List} moveShelf={moveShelf} shelf="read" label="Read"/>
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
