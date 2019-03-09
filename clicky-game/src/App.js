import React, { Component } from "react";
import Header from "./components/Header.js";
import Instructions from "./components/Instructions.js";
import Footer from "./components/Footer.js";
import ArtistImage from "./components/ArtistImage.js";
import imageData from "./data/ImageData.js";



class App extends Component {

  state = {
    imageData,
    score: 0,
    highScore: 0
  };

  // this will run right before the page is fully loaded
  componentWillMount() {
    // randomize the array of objects everytime the page is refreshed
    // taken from w3 schools
    imageData.sort(() => 0.5 - Math.random());
  }


  handleOnClick = id => {
    this.componentWillMount();
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
    if (this.state.highScore < 12 && this.state.highScore === this.state.score) {
      this.setState({
        highScore: this.state.highScore + 1
      });
    }
    if(this.state.highScore === 11){
      alert("You won!");
      this.setState({
        highScore: this.state.highScore + 1
      });
      this.resetGame();
    }
  }

  incorrectGuess = () => {
    
    alert("Duplicate Selection! :(\nTry Again!");
    this.resetGame();

  }

  resetGame = () => {
    this.componentWillMount();
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
        // quick ternary expression to see if photo is clicked already
        onClick={image.clicked ? this.incorrectGuess : this.handleOnClick}
      />
    )

    return (
      <div>
        <Header
          score={this.state.score}
          highScore={this.state.highScore} />
        <Instructions
          score={this.state.score}
          highScore={this.state.highScore}
        />
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
