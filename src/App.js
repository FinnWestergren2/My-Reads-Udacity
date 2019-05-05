import React, {useState, useEffect} from 'react';
import './App.css';
import SearchPage from './SearchPage';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import ListPage from './ListPage';


const BooksApp = () => {
  const [books, setBooks] = useState([]);
  
  useEffect(() => {
    BooksAPI.getAll().then(data => {
      setBooks(data);
    });
  }, []);

  
  const updateList = (book, target) => {
    BooksAPI.update(book, target).then(() =>
    BooksAPI.getAll().then(data => {
      setBooks(data);
    }));
  }


  const shelves = [
    {value:"currentlyReading", title:"Currently Reading"},
    {value:"wantToRead", title:"Want to Read"},
    {value:"read",  title:"Read"},
    {value:"none", title:"None"}];

  return (
    <div className="app">
      <Route exact path="/search" render={() => 
        <SearchPage 
          shelves={shelves}
          books={books}
          updateList={updateList}/>}/>
      <Route exact path="/" render={() => 
        <ListPage 
          shelves={shelves}
          books={books}
          updateList={updateList}/>}/>
    </div>
  );
}

export default BooksApp
