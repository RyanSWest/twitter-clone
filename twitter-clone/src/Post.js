import { Avatar } from '@material-ui/core'
import React from 'react'
import './post.css'

function Post({
    displayName,
    username,
    verified,
    timestamp,
    verified,
    text
}) {
    return (
        <div className = "post">
            <div className = "post__avatar">
                <Avatar
                  src = "https://tse1.mm.bing.net/th?id=OIP.hovcpGJnAzaVfo4ZJm-owAHaEK&pid=Api&P=0&w=279&h=157"/>
                  
            </div>

            
        </div>
    )
}

export default Post