import React from "react";
import './Card.css'

function Card({storyname , description}) {
   
  return (
    
        <div className="card-container ">
            <div class="row">
                <img  className="image-container" src={storyname} alt="photo" />
            </div>
            <div className="card-title">
                <h2 className="txt">{description}</h2>
            </div>
        
        </div>

 
     
  )

    
}



export default Card;