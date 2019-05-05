import React from 'react';
import BookShelf from './BookShelf';
import { Link } from 'react-router-dom';


const ListPage = (props) => {
  const { shelves, books, updateList } = props;

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        {shelves.map((s) =>        
          s.value !== 'none' && <BookShelf 
            key={s.value}
            title={s.title}
            books={books.filter((b) => {return b.shelf === s.value})}
            shelves={shelves}
            update={(book, target) => updateList(book, target)}/>
        )}
      </div>
      <div className="open-search">
        {/* TODO use routing instead */}
        <Link className="link" to="search"/>
      </div>
    </div>
  );
}

export default ListPage;
