import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const Bookshelf = ({ books, moveShelf, label, shelf }) => {

	Bookshelf.propTypes = {
		books: PropTypes.array,
		moveShelf: PropTypes.func,
	}
  	let List = [];

  	if (shelf === "none") {
  		List = books;
  	}
  	else {
			List = books.filter((book) => book.shelf === shelf);
  	}

  	return (
		<section className="bookshelf">
		    <h2 className="bookshelf-topic">{label}</h2>
		    <hr className="fancy-line"></hr>
		    <ol className="books-grid">
	        {
	          	List.map((book) => {
	          	return (
		            <li key={book.id}>
		              <Book book={book} moveShelf={moveShelf}/>
		            </li>
	          	);
	          })
	        }
	      </ol>
	  </section>
    );

}

export default Bookshelf;
