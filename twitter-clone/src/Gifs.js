import React, {useEffect, useState}from 'react'
import db from "./firebase";
import CloseIcon from '@material-ui/icons/Close'



function Gifs({openGifs}) {

const [gifs,setGifs]= useState([])
  useEffect(() => {
    db.collection("Gifs").onSnapshot((snapshot) =>
      setGifs(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))

      
    );
    
  }, []);
    return (
        <div className = 'gif__container'>
          <span onClick = {()=> openGifs()}> 
          <CloseIcon />
          </span>
          
         {gifs.map(g => (
          <div className = 'gif__imageDiv'>
             <img
              className ="gif__image" src ={g.data.image}/>
             </div>
         ))}
            
        </div>
    )
}

export default Gifs

