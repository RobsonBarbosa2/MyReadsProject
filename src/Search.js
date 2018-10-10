import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Search extends Component {

state = {
  query : '',
  resultBooks: [],
  found: ''
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
          this.setState({resultBooks: resultBooks, found: 1})

        }else{
          this.setState({resultBooks: [], found: 0})
          toast.info('No results found!')
        }
      })
    }else{
      this.setState({resultBooks: []})
    }
  }

render(){

    const {query} = this.state
    const {moveShelf} = this.props
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
            {(this.state.found === 0) &&
                 <h2>
                    No books found. :c
                 </h2>
               }
              {
                this.state.resultBooks.map(resultBooks => {
                    let shelf = "none"

                    this.props.books.map(book => (
                        book.id === resultBooks.id ? shelf = book.shelf : 'none'
                    ))
                    return (
                      <li key={resultBooks.id}>
                          <Book
                            book={resultBooks}
                            moveShelf={moveShelf}
                            actualShelf="currentlyReading"
                            shelf={shelf}
                          />
                      </li>
                    )
                }
              )
              }
            </ol>
          </div>
        </div>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
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

export default Search;
