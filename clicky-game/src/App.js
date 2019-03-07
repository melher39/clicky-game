import React, { Component } from "react";
import Header from "./components/Header.js";
import Instructions from "./components/Instructions.js";
import MainContent from "./components/MainContent.js";
import Footer from "./components/Footer.js";


class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Instructions/>
        <MainContent/>
        <Footer/>
      </div>
    );
  }
}

export default App;
