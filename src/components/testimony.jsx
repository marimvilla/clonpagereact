import React from "react";
import '../stylesheets/Testimony.css'

function Testimony(props){
    return(
        <div className="testimony-container">
            <img className="image-testimony" src={require(`../assets/${props.image}.png`)} alt='face'/>
            <div className="container-text-testimony">
                <p className="name-testimony"><strong>{props.name}</strong> in {props.country}</p>
                <p className="work-testimony">{props.work} at <strong>{props.company}</strong></p>
                <p className="text-testimony">"{props.text}"
                </p>
            </div>
        </div>
    );
}

export default Testimony;