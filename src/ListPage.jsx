import React from 'react';
import BookShelf from './BookShelf';

const ListPage = (props) => {
  const { shelves } = props;
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        {shelves.map((s) =>          
          <BookShelf key={s.value} value={s.value} title={s.title} shelves={shelves}/>
        )}
      </div>
      <div className="open-search">
        {/* TODO use routing instead */}
        <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button> 
      </div>
    </div>
  );
}

export default ListPage;
