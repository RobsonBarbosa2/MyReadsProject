import React, {PureComponent} from 'react';

class Book extends PureComponent {
    render(){
      const {book, shelf} = this.props
      let thumb = book.imageLinks ? book.imageLinks.thumbnail : '';

        return(
          <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${thumb}")` }}></div>
              <div className="book-shelf-changer">
                <select onChange={(event) => this.props.moveShelf(
                    book, event.target.value
                )}
                value={shelf}
                >
                  <option value="move" disabled>Move to...</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors}</div>
          </div>
        );
    }
}

export default Book;
