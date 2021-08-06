import React from 'react';
import './tweetBox.css';
import {Avatar, Button} from "@material-ui/core";

function TweetBox() {
    return (
        <div className = 'tweetBox'>

            <form>
                <div className = "tweetBox__input">
                <Avatar 
                  src = "https://tse1.mm.bing.net/th?id=OIP.hovcpGJnAzaVfo4ZJm-owAHaEK&pid=Api&P=0&w=279&h=157"/>

                  <input placeholder = "whats happening?" type = "text"/>
 

                </div>
                <input
                 placeholder = "enter image url" 
                 type = "text"
                 className= "tweetBox__imageInput"
                 
                 
                 />

                <Button className = "tweetBox__button">Tweet</Button>
            </form>

            
        </div>
    )
}

export default TweetBox
