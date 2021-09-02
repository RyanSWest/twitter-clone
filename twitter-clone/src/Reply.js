import React, {useEffect ,useState} from 'react';
import './reply.css';
import { Avatar, Button} from '@material-ui/core/'
import CloseIcon from '@material-ui/icons/Close'
import GifIcon from '@material-ui/icons/Gif';
import EmojiEmoticon from '@material-ui/icons/EmojiEmotions'
import db from './firebase';
import Gifs from './Gifs'
 
//No Reply component was found on YouTube
const Reply = ({displayName, text, avatar, toggle, id })=> {
const [comment, setComment]= useState('')
const [image, setImage]=useState('')
const [seeGifs, setSeeGifs]= useState(false)
 //get Gif collection from Firebase!!
 const [gifs, setGifs] = useState([]);
 useEffect(() => {
   db.collection("Gifs").onSnapshot((snapshot) =>
     setGifs(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
   );
 }, []);

   const addComment = (comment)=> {
    db.collection('Posts').doc(id).collection('comments').add(
        {username: 'some_guy', text: comment}
    )

    db.collection('Posts').add({
        displayName: 'Hipster_Tony',text:comment, replying:displayName, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Hipster%2C_Newtown%2C_hipster_beard%2C_retro_watch%2C_colourful_glasses.jpg/1200px-Hipster%2C_Newtown%2C_hipster_beard%2C_retro_watch%2C_colourful_glasses.jpg',
        image: image,
        timestamp: Date.now()




        
    })
    setComment('')
}

const openGifs = ()=> {
    setSeeGifs(!seeGifs)
    console.log('GIF', seeGifs)
}
   

   return <div className = 'reply'>
        {seeGifs && (
        <div className="gif__container">
          <div className="gif__close">
            <span onClick={() => openGifs()}>
              <CloseIcon />
            </span>
          </div>
          <div>
            {gifs.map((g) => (
              <div
                className="gif__imageDiv"
                onClick={() => setImage(g.data.image)}
              >
                <img className="gif__image" src={g.data.image} />
              </div>
            ))}
          </div>
        </div>
      )}

       <div className = 'close'
        onClick= {()=> toggle()}>
           <CloseIcon className ='close__x'/>
       </div>
       
       <div className = 'reply__top'>
           <Avatar src = {avatar}/>
       
          <p><strong>{displayName}</strong>  @{displayName}</p>
          
       </div>
       <div className= 'post__text'>
           <p>{text}</p> 
       </div>
       <div className= 'replying'>
                <span> Replying to @  <strong className ='displayName'>{displayName}</strong> </span>
            </div>
       <div className = 'reply__middle'>
       <Avatar/> 
       
        <input
            placeholder='Tweet Your Reply' 
            name={comment}
            value={comment}
            onChange={(e)=>setComment(e.target.value)}
        
        />
        <input 
        placeholder ="Enter an Image (optional)"
        name ={image}
        value={image}
        onChange = {(e)=> setImage(e.target.value)}
        />

       </div>
         
         
        <div className = 'reply__buttonDiv'>
            <span onClick = {()=> openGifs()}>
            <GifIcon fontSize= 'large'/> 

            </span>
             <EmojiEmoticon/>
            <Button
            onClick={()=>addComment(comment)}
             
            className = 'reply__button'>Reply</Button>

        </div>
   </div>


}


export default Reply