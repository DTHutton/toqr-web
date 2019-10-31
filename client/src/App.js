import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Navbar />
        <Main />
        <Footer />
      </Wrapper>
    );
  }
}

export default App;
