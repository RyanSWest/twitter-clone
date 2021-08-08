import { Avatar } from '@material-ui/core'
import React, { useState, useRef, forwardRef} from 'react'
import './post.css';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import './post.css';
import Reply from './Reply';
import './reply.css'
import CloseIcon from '@material-ui/icons/Close'
import { useEffect }from 'react';
import db from './firebase';


const Post = forwardRef(
    ({
    displayName,
    username,
    verified,
    timestamp,
    // verified,
    text,
    image,
    avatar,
    
    id,
    replying,
    likes
    
},ref)=> {

    const [stuff,setStuff]=useState([])
    // console.log("STUFF", stuff)
    const [comment, setComment]=useState('')
     const [numLikes,setNumLikes]=useState(0)
     
 
    
    useEffect(() => {
        

     db.collection('Posts').doc(id).collection('comments')
         .onSnapshot((snapshot)=> {
            setStuff(snapshot.docs.map((doc) =>({  data:doc.data()})))

            
         })
       
           
            
           

      
         
         
    }, [ ])

    //Try to add the Likes Now
    const like =()=> {
        db.collection('Posts').doc(id).add({
            likes: numLikes +1
        })

    }

     const [reply, setReply]= useState(false)

     const [seeComments, setSeeComments]=useState(false)

     console.log("ID==>",id, stuff )
     

     const toggle = ()=> {
         setReply(!reply)
     }

    
    

   
    
    
    return (
        <>

 {reply && ( <Reply

              displayName= {displayName}
              avatar= {avatar}
              text = {text}
              toggle={toggle}
              id = {id}
              
              /> )}


        <div className = "post"
        ref = {useRef()}
         
         >
          
             <div className = "post__avatar">
                
                <Avatar
                  src = {avatar}/>
                  
                  
            </div>
            <div className = 'post__body'>
                <div className = 'post__header'>
                    
                   
                    <div className = 'post__headerText'>
                        
                         <h3>{displayName} <span className= 'post__headerSpecial'>
                        {replying&&(<h3>Replying to <span className= 'replying__to'> @{replying}</span>  </h3>)}

                            {verified && ( <VerifiedUserIcon className = 'post__badge'/>) }
                         </span>
                        </h3>
                    </div>
                    <div className ='post__headerDescription'>
                        <p> {text}</p>
                    </div>
            </div>
            <img src = {image}  />
             
             {stuff.length >0 && (
                   <p
                   className = 'seeComments'
                   onClick ={()=> setSeeComments(!seeComments)}>See Comments</p>
             )}
            


            {seeComments && (
                stuff.map(e => (
                    <p><strong> {e.data.username}</strong> :  {e.data.text}</p>
                ))
            )}
            <div className = 'post__footer'> 
             <div
             className='num__comments'
              onClick = {()=> setReply(!reply)}> 
              <div className = 'comment'> 
            <ChatBubbleOutlineIcon fontSize="small" />
            </div>
            <p   >{stuff.length}</p> 
            </div>
            
             
            <RepeatIcon fontSize="small" />
            <div
             className='likes'
            onClick={()=> setNumLikes(numLikes+1)}> 
            <FavoriteBorderIcon fontSize="small" />
           
            <p  > {numLikes}</p>
            </div>
            <PublishIcon fontSize="small" />
            </div>

           

            </div>
            
        </div>
        </>
        
    );
}
);

export default Post
