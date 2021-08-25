import React, { useState, useEffect, useForceRender } from "react";
import "./feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import db from "./firebase";
import { useContext } from "react";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import { PostContext } from "./contexts/PostContext";
import SearchIcon from "@material-ui/icons/Search";

function Feed({ searcher }) {
  const { posts, setPosts } = useContext(PostContext);

  const [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    db.collection("Posts").orderBy('timestamp').get().then((snapshot) =>
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      
    );
      

  }, [searchItem]);

  let orderedPosts= posts.sort((a,b)=> parseInt (b.data.timestamp) - parseInt (a.data.timestamp)) 

 
 console.log("ORDER", orderedPosts)
   
  console.log(Date.now())

   

   
  
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
        <div className="feed__input">
          <SearchIcon className="feed__search" />

          <input
            placeholder="Search Twitter"
            type="text"
            name="searchItem"
            value={searchItem}
            onChange={(e) => setSearchItem(e.target.value)}
            onSubmit={() => searcher(searchItem)}
          />

          <button onClick={() => searcher(searchItem)}>Search</button>
        </div>
      </div>

      <div className="post__body">
        <div className="post__header"></div>
        <TweetBox />

        {posts.map ((post) => (
          <Post
            key={post.id}
            id={post.id}
            displayName={post.data.displayName}
            username={post.data.username}
            text={post.data.text}
            avatar={post.data.avatar}
            image={post.data.image}
            verified={post.data.verified}
            replying={post.data.replying}
            likes={post.data.likes}
            timestamp ={post.data.timestamp}
          />
        ))}
      </div>
    </div>
  );
}

export default Feed;
