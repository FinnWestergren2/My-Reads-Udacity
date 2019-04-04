import React, { useEffect, useState } from 'react';
import Book from './Book';
import * as BooksAPI from './BooksAPI'


const BookShelf = (props) => {
    const { title, value, shelves } = props;
    const [books, setBooks] = useState([]);

    useEffect(() => {
        populateShelf(value).then(data => setBooks(data));
    },[value]);
    
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    <li>
                        {books.map((book) =>
                        <Book
                            key={book.id}
                            bookDTO={book}
                            shelves={shelves}/>
                        )}
                    </li>
                </ol>
            </div>
        </div>
    );
}

async function populateShelf(value, setFetched) {
    const data = await BooksAPI.getAll();
    return data.filter((b)=>{
        return b.shelf === value
    });
}

export default BookShelf;
