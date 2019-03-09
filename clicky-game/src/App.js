import React, { Component } from "react";
import Header from "./components/Header.js";
import Instructions from "./components/Instructions.js";
// import MainContent from "./components/MainContent.js";
import Footer from "./components/Footer.js";
import ArtistImage from "./components/ArtistImage.js";
import imageData from "./data/ImageData.js";



class App extends Component {

  state = {
    imageData,
    score: 0,
    highScore: 0
  };



  handleOnClick = id => {
    this.increaseScore();
    this.increaseHighScore();
    this.setState(prevState => {
      const updatedImageData = prevState.imageData.map(photo => {
        if (photo.id === id) {
          photo.clicked = true;

          console.log(photo);
        }
        return photo;

      });

      return {
        imageData: updatedImageData

      }
    });

  }

  increaseScore = () => {
    this.setState({
      score: this.state.score + 1
    });
  }

  increaseHighScore = () => {
    this.setState({
      highScore: this.state.highScore + 1
    });
  }

  resetGame = () => {
    this.setState(prevState => {
      const updatedImageData = prevState.imageData.map(photo => {
        // if (photo.id === id) {
          photo.clicked = false;

          // console.log(photo);
        // }
        return photo;

      });

      return {
        imageData: updatedImageData, 
        score: 0
      }
    });
  }

  render() {

    const newImageDataArray = imageData.map(image =>
      <ArtistImage
        photo={image}
        key={image.id}
        // quick ternay expression to see if photo is clicked already
        onClick={image.clicked ? this.resetGame : this.handleOnClick}
      />
    )

    return (
      <div>
        <Header 
        score={this.state.score}
        highScore={this.state.highScore}/>
        <Instructions />
        <div className="container row">
          {newImageDataArray}
        </div>
        {/* <MainContent /> */}
        <Footer />
      </div>
    );
  }
}

export default App;
