import React, {useEffect, useState}from 'react'
import db from "./firebase";


function Gifs() {

const [gifs,setGifs]= useState([])
  useEffect(() => {
    db.collection("Gifs").onSnapshot((snapshot) =>
      setGifs(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))

      
    );
    
  }, []);
    return (
        <div className = 'gifs'>
         {gifs.map(g => (
             <img src ={g.data.image}/>
         ))}
            
        </div>
    )
}

export default Gifs

