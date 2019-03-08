import React from "react";

function ArtistImage(props){
    return(
        <div className="col s6 m3">
            <img className="circle" src={props.photo.url} alt={props.photo.name}></img>
            
        </div>
    );
}

export default ArtistImage;