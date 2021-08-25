import React, {useState} from 'react';
import './widgets.css';
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
    
}
from 'react-twitter-embed';
import SearchIcon from '@material-ui/icons/Search';
import {PostContext} from  './contexts/PostContext';
import  {useContext}from 'react'
 

function Widgets({searcher}) {
    const [searchItem, setSearchItem]= useState('')

    const {posts,setPosts} = useContext(PostContext)
    const i = 'tiger'

    // const searcher = (item)=> {
    //      const filtered = posts.filter( e => {
    //          if( e.data.text && e.data.text.toLowerCase().match(item) || e.data.displayName && e.data.displayName.toLowerCase().match(item) )
             
             
    //          {
    //              return e
    //          }
            
    //      })
    //      console.log("SEARCHITEM", searchItem)
    //      console.log( "FILTER FROM WIDGETS",filtered)
    //      setPosts(filtered)
    //     //  setSearchItem('')
    // }

     
 

    console.log("POSTS FROM WIDGETS", posts)
    return (


        <div className= "widgets">
            <div className ='widgets__input'>


                <SearchIcon className= 'widgets__searchIcon'/>

              
                <input className='widgets__search' 
                 placeholder='Search Twitter'
                 type = 'text'
                 name = 'searchItem'
                 value = {searchItem}
                 onChange = {(e)=>setSearchItem(e.target.value)}
                
                />
                <button onClick={()=>searcher(searchItem)}>Search</button>
                {/* </form> */}

            </div>
             <div className = 'widgets__widgetContainer'>
             <h2>Whats Happening?</h2>
             <TwitterTweetEmbed tweetId={"@RyanWes85896736"}/>
             {/* <TwitterTimeLineEmbed 
             sourceType ='profile'
             screenName ='some_guy'
             options = {{height: 400}}
             
             /> */}

         <TwitterShareButton
          url={"https://www.facebook.com/ryan.west.1232760"}
          options={{ text: "#reactjs is awesome", via: "some_guy" }}
        />
             </div>
            
            
        </div>
    )
}

export default Widgets
 