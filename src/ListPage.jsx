import React, {useState, useEffect} from 'react';
import BookShelf from './BookShelf';
import * as BooksAPI from './BooksAPI';
import { Link } from 'react-router-dom';


const ListPage = (props) => {
  const { shelves } = props;
  const [books, setBooks] = useState([]);

  useEffect(() => {
    BooksAPI.getAll().then(data => {
      setBooks(data);
    });
  }, []);

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
            update={(book, target) => updateList(book, target, setBooks)}/>
        )}
      </div>
      <div className="open-search">
        {/* TODO use routing instead */}
        <Link className="link" to="search"/>
      </div>
    </div>
  );
}

const updateList = (book, target, setBooks) => {
  BooksAPI.update(book, target).then(() =>
  BooksAPI.getAll().then(data => {
    setBooks(data);
  }));
}

export default ListPage;
