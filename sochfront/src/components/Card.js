import React from "react";
import './Card.css'
import { Link } from "react-router-dom";

function Card({story}) {
   
  return (
    
        <div className="card-container ">
            <div class="row">
                <img  className="image-container" src={story.thumbnail.url} alt="photo" />
            </div>
            <div className="card-title">
                {/* <h2 className="txt">{story.name}</h2> */}
                <Link className="txt" to="/kon">{story.name}</Link>
            </div>
        
        </div>

 
     
  )

    
}



export default Card;