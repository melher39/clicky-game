import React from "react";
import ArtistImage from "./ArtistImage.js";
import imageData from "../images/ImageData.js";

function MainContent() {
    const newImageDataArray = imageData.map(image =>
        <ArtistImage
            photo={image}
            key={image.id}
        />
    )

    return (

        // this will be used just to wrap the pictures in a grid style
        <div className="container row">
            {newImageDataArray}
        </div>
    );
}

export default MainContent;