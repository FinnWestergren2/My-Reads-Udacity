import React from 'react';
import Book from './Book';


const BookShelf = (props) => {
    const {title, update, books, shelves} = props;
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    <li>
                        {books.map((book) =>
                        <Book
                            key={book.id}
                            bookData={book}
                            shelves={shelves}
                            changeShelf={(targetShelf) => update(book, targetShelf)}/>
                        )}
                    </li>
                </ol>
            </div>
        </div>
    );
}

export default BookShelf;
