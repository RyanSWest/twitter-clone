import { Avatar } from '@material-ui/core'
import React from 'react'
import './post.css';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import './post.css';

function Post({
    displayName,
    username,
    verified,
    timestamp,
    // verified,
    text,
    image,
    avatar
}) {
    return (
        <div className = "post">
            <div className = "post__avatar">
                <Avatar
                  src = "https://tse1.mm.bing.net/th?id=OIP.hovcpGJnAzaVfo4ZJm-owAHaEK&pid=Api&P=0&w=279&h=157"/>
                  
            </div>
            <div className = 'post__body'>
                <div className = 'post__header'>
                    <div className = 'post__headerText'>
                        <h3>Some guy <span className= 'post__headerSpecial'>
                            <VerifiedUserIcon className = 'post__badge'/>
                        </span>
                        </h3>
                    </div>
                    <div className ='post__headerDescription'>
                        <p>I challenge you!</p>
                    </div>
            </div>
            <img src = 'https://media2.giphy.com/media/Ywxt9v39rUpmU/giphy.gif?cid=ecf05e47bd523ed1daac6161512f488cffdbcf350e3d1bab&rid=giphy.gif&ct=g'/>
            <div className = 'post__footer'>
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />


            </div>
            
        </div>
        </div>
    )
}

export default Post
