import React from 'react';
import './widgets.css';
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
    
}
from 'react-twitter-embed';
import SearchIcon from '@material-ui/icons/Search'

function Widgets() {
    return (
        <div className= "widgets">
            <div className ='widgets__input'>
                <SearchIcon className= 'widgets__searchIcon'/>
                <input className='widgets__search' 
                 placeholder='Search Twitter'
                 type = 'text'
                
                />

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
          options={{ text: "#reactjs is awesome", via: "cleverqazi" }}
        />
             </div>
            
            
        </div>
    )
}

export default Widgets
 