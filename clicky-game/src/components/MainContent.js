import React from "react";
import ArtistImage from "./ArtistImage.js";
import imageData from "../data/ImageData.js";

class MainContent extends React.Component {

    state = {
        imageData,
        score: 0,
        highScore: 0
    };

    handleOnClick = id => {
        this.increaseScore();
        this.increaseHighScore();
        this.setState(prevState=>{
            const updatedImageData = prevState.imageData.map(photo=>{
                if (photo.id === id){
                    photo.clicked = true;
                    console.log(photo);
                }
                return photo;
                
            });

            return{
                imageData: updatedImageData
                
            }
        })
        
    };

    increaseScore = () => {
        this.setState({
            score: this.state.count + 1
        });
    }

    increaseHighScore = () => {
        this.setState({
            highScore: this.state.highScore + 1
        });
    }

    render() {
        const newImageDataArray = imageData.map(image =>
            <ArtistImage
                photo={image}
                key={image.id}
                onClick={this.handleOnClick}
            />
        )

        return (
            
            // this will be used just to wrap the pictures in a grid style
            <div className="container row">
                {newImageDataArray}
            </div>
        );
    }

}

export default MainContent;