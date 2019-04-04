import React from 'react';
import BookShelf from './BookShelf';

const ListPage = (props) => { 
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        {/* TODO make a dynamic list of bookshelves stored here? */}
        <BookShelf title="Currently Reading"/>
        <BookShelf title="Want to Read"/>
        <BookShelf title="Read"/>
      </div>
      <div className="open-search">
        {/* TODO use routing instead */}
        <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button> 
      </div>
    </div>
  );
}

export default ListPage;
