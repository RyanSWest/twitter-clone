import './App.css';
import Sidebar from './Sidebar';
import React, {useState} from 'react';
import Feed from './Feed';
import Widgets from './Widgets';
import Post from './Post'
import{ SearchContext} from './contexts/SearchContext'
function App() {

  const [search, setSearch]= useState('')
  return (
    <div className="app">
      <SearchContext.Provider value = {{search, setSearch}}></SearchContext.Provider>
    
      <Sidebar/>
     
      <Feed/>
      <Widgets/>
    </div>
  );
}

export default App;
