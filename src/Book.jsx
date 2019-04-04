import React, {useState} from 'react';

const Book = (props) => {
    const { bookDTO, shelves } = props;
    const { author, coverImage, title, shelf} = bookDTO;
    const [ currentShelf, setCurrentShelf ] = useState(shelf);
    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: coverImage }}></div>
                <div className="book-shelf-changer">
                <select value={currentShelf} onChange={(e) => setCurrentShelf(e.value)}>
                    <option value="move" disabled>Move to...</option>
                    {shelves.map((s)=>
                    <option 
                        disabled={s.value===currentShelf}
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
