import React, {useState, useEffect} from 'react';
import BookShelf from './BookShelf';
import * as BooksAPI from './BooksAPI'

const ListPage = (props) => {
  const { shelves } = props;
  const [books, setBooks] = useState([]);

  useEffect(() =>{
    BooksAPI.getAll().then(data => {
      setBooks(data);
    });
  });

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
            books={books.filter(b => {return b.shelf === s.value;})}
            shelves={shelves}
            update={(book, target) => {
              BooksAPI.update(book, target);
              BooksAPI.getAll().then(data => {
                setBooks(data);
              });
            }}/>
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
