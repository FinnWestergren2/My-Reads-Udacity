import React, { useState }from 'react';

const Book = (props) => {
    const { bookData, shelves, changeShelf } = props;
    const { author, imageLinks, title} = bookData;
    const [ shelf, setShelf ] = useState (bookData.shelf ? bookData.shelf : 'none')

    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imageLinks.thumbnail})` }}></div>
                <div className="book-shelf-changer">
                <select value={shelf} onChange={(e) => {
                    setShelf(e.target.value)
                    changeShelf(e.target.value);
                    }}>
                    <option value="move" disabled>Move to...</option>
                    {shelves.map((s)=>
                    <option
                        disabled={s.value === shelf}
                        key={s.value}
                        value={s.value}>
                        {s.title}
                    </option>)}
                </select>
                </div>
            </div>
            <div className="book-title">{title}</div>
            <div className="book-authors">{author}</div>
        </div>
    );
}

export default Book;
