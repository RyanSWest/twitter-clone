import React from 'react';
import './feed.css';
import TweetBox  from './TweetBox';

import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';


function Feed() {
    return (
        <div className= "feed">
             <div className="feed__header"> 
            <h2>Home</h2>
            </div>
            <div className = "post__body">
                <div className = "post__header">

                </div>

                <div className = 'post__headerText'>
                    <h3>Hey!!</h3><span>

                        <VerifiedUserIcon className = 'post__badge'/>
                    </span>
                </div>
            </div>
            <TweetBox/>

        </div>
    )
}

export default Feed
