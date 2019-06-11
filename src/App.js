import React, {useState, useEffect} from 'react';
import './App.css';
import SearchPage from './SearchPage';
import { Route, Switch } from 'react-router-dom';
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
    const updatedBook = Object.keys(books).filter(b => books[b].id === book.id)[0];
    if(updatedBook){
      books[updatedBook].shelf = target;
      setBooks([...books].sort(pageCountSort)); // optimistic update
    }
    BooksAPI.update(book, target).then(() =>
    BooksAPI.getAll().then(data => {
      setBooks(data.sort(pageCountSort));
    }));
  }

  const pageCountSort = (a, b) => a.pageCount -b.pageCount; // I had to sort by something to make optimistic update look nice


  const shelves = [
    {value:"currentlyReading", title:"Currently Reading"},
    {value:"wantToRead", title:"Want to Read"},
    {value:"read",  title:"Read"},
    {value:"none", title:"None"}];

  return (
    <div className="app">
    <Switch>
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
      </Switch>
    </div>
  );
}

export default BooksApp
