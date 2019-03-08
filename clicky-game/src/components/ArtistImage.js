import React from "react";

function ArtistImage(props) {
    return (
        <div className="col s6 m3">
            <img className="circle" 
            src={props.photo.url} 
            alt={props.photo.name}
            onClick={()=>props.onClick(props.photo.id)}
            ></img>

        </div>
    );
}

export default ArtistImage;