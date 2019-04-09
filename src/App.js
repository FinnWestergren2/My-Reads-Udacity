import React from 'react';
import './App.css';
import SearchPage from './SearchPage';
import { Route } from 'react-router-dom';
import ListPage from './ListPage';


class BooksApp extends React.Component {
  render() {
    const shelves = [
      {value:"currentlyReading", title:"Currently Reading"},
      {value:"wantToRead", title:"Want to Read"},
      {value:"read",  title:"Read"},
      {value:"none", title:"None"}
  ];
    return (
      <div className="app">
        <Route exact path="/search" render={() => <SearchPage shelves={shelves}/>}/>
        <Route exact path="/" render={() => <ListPage shelves={shelves}/>}/>

      </div>
    );
  }
}

export default BooksApp
