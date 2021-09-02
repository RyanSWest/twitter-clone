import "./App.css";
import Sidebar from "./Sidebar";
import React, { useState, useEffect } from "react";
import Feed from "./Feed";
import Widgets from "./Widgets";
import SearchPage from "./SearchPage";
import Post from "./Post";
import { SearchContext } from "./contexts/SearchContext";
import { PostContext } from "./contexts/PostContext";
import { PostAddSharp } from "@material-ui/icons";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import db from "./firebase";
import Home from "./Home";

function App() {
  const [search, setSearch] = useState("");
  const [posts, setPosts] = useState([]);

   

  useEffect(() => {
    db.collection("Posts").orderBy('timestamp').get().then((snapshot) =>
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      
    );
      

  }, [ posts]);
  const [searchItem, setSearchItem] = useState("");
 
  const searcher = (item) => {
    const filtered = posts.filter((e) => {
      if (
        (e.data.text && e.data.text.toLowerCase().match(item)) ||
        (e.data.displayName && e.data.displayName.toLowerCase().match(item))
      ) {
        return e;
      }
    });
    console.log("SEARCHITEM", searchItem);
    console.log("FILTER FEROM APP", filtered);
    setPosts(filtered);
    
    setSearchItem("");
  };

  return (
    <div className="app">
      <Router>
        <PostContext.Provider value={{ posts, setPosts }}>
          <SearchContext.Provider
            value={{ search, setSearch }}
          > 

          <Sidebar />

          <Feed searcher={searcher}   />

          <Widgets posts={posts} searcher={searcher} />
          </SearchContext.Provider>
        </PostContext.Provider>
       
        

      
      </Router>
    </div>
  );
}

export default App;
