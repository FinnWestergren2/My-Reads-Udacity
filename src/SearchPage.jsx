import React, {useState, useEffect} from 'react';
import BookShelf from './BookShelf';
import * as BooksAPI from './BooksAPI';
import { Link } from 'react-router-dom';

const SearchPage = (props) => {
    const { shelves } = props;
    const [query, setQuery] = useState('');
    const [books, setBooks] = useState([]);

    useEffect(() => {
      BooksAPI.search(query).then(data => {
        if (data && !data.hasOwnProperty('error')){
            setBooks(data.filter(b => {
                return b.hasOwnProperty('imageLinks') && b.imageLinks.hasOwnProperty('thumbnail') && b.hasOwnProperty('authors');
            }));
        }
        else setBooks([]);
      });
    }, [query]);

    return (
    <div className="search-books">
        <div className="search-books-bar">
            <Link className="close-search" to="/"/>
            <div className="search-books-input-wrapper">
                <input 
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    type="text" 
                    placeholder="Search by title or author"/>        
            </div>
        </div>
        <div className="search-books-results">
            <BookShelf
                books={books}
                shelves={shelves}
                update={(book, target) => BooksAPI.update(book, target)}/>
        </div>
    </div>
    );
}

export default SearchPage;
