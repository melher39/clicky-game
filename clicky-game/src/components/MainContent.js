import React from "react";
import ArtistImage from "./ArtistImage.js"

function MainContent(){
    return(
        // this will be used just to wrap the pictures in a grid style
        <div className="container row">
            <ArtistImage/>
        </div>
    );
}

export default MainContent;