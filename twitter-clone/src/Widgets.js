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
import {SearchContext} from './contexts/SearchContext'
import  {useContext}from 'react'
 

function Widgets({searcher}) {
    const {search, setSearch} =   useContext(SearchContext)

    const {posts,setPosts} = useContext(PostContext)
     
 

     
 

     return (


        <div className= "widgets">
            
             <div className = 'widgets__widgetContainer'>
             <h2>Whats Happening?</h2>
            

         <TwitterShareButton
          url={"https://www.facebook.com/ryan.west.1232760"}
          options={{ text: "#reactjs is awesome", via: "some_guy" }}
        />

        <div className = 'widget'>
            <p> Weather LIVE</p>
            <h3> Flooding remains a threat as Ida moves northeast</h3>
            <img src = 'https://pbs.twimg.com/semantic_core_img/1398063655523020800/iVJz8jHo?format=png&name=240x240'/>

        </div>

        <div className = 'widget'>
            <p>COVID-19 LIVE</p>
            <h3>COVID-19: News and updates for Texas</h3>
            <img src = 'https://pbs.twimg.com/semantic_core_img/1338524754664275976/5ktjxtim?format=png&name=240x240'/>
        </div>
             </div>
            
            
        </div>
    )
}

export default Widgets
 