import React , {useState, useEffect}from 'react';
import './feed.css';
import TweetBox  from './TweetBox';
import Post from './Post';
import db from './firebase'

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

                {/* <div className = 'post__headerText'>
                    <h3>Hey!!</h3><span>

                        <VerifiedUserIcon className = 'post__badge'/>
                    </span>
                </div> */}
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
                {/* <Post
                 displayName ="Zank Frappa"
                username= 'Zappa'
                text = "IT WORKS!"
                avatar='https://www.bing.com/th?id=OIP.AO0OY95_OK5THisN9Cff_AHaHO&w=209&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2'
                image= 'https://www.bing.com/th?id=OIP.nrilZjACn2hzR9WbDWZSOAHaE9&w=143&h=106&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2'
                verified={true}
                  /> */}
            </div>
            <TweetBox/>

        </div>
    )
}

export default Feed
