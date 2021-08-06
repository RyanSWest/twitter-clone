import React , {useState, useEffect}from 'react';
import './feed.css';
import TweetBox  from './TweetBox';
import Post from './Post';
import db from './firebase';
import FlipMove from 'react-flip-move';

import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';


function Feed() {
    const [posts, setPosts]=useState([])

    useEffect(()=> {
        db.collection('Posts').onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => doc.data()))
        })


    }, [])

    console.log("POSTS", posts)
    return (
        <div className= "feed">
             <div className="feed__header"> 
            <h2>Home</h2>
            </div>
            <div className = "post__body">
                <div className = "post__header">

                </div>
                 <TweetBox/>
                <FlipMove> 
                {posts.map(post => (
                    
                    <Post
                    displayName = {post.displayName}
                   username= {post.username}
                   text =  {post.text}
                   avatar= {post.avatar}
                   image=  {post.image}
                   verified={post.verified}
                     />
                     
    ))}
    </FlipMove>
               
            </div>
           

        </div>
    )
}

export default Feed
