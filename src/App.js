import React from 'react'
import './App.css'
import SearchPage from './SearchPage'
import ListPage from './ListPage'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  render() {
    const shelves = [
      {value:"currentlyReading", title:"Currently Reading"},
      {value:"wantToRead", title:"Want to Read"},
      {value:"read",  title:"Read"},
      {value:"none", title:"None"}
  ];
    return (
      <div className="app">
        {this.state.showSearchPage ?
          <SearchPage/> : 
          <ListPage
            shelves={shelves}/>
        }
      </div>
    );
  }
}

export default BooksApp
