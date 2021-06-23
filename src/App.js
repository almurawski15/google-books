import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import Wrapper from "./components/Wrapper";

import "./App.css";

class App extends Component {
 
  render() {
    return (
     <Router>
        <div>
          <Wrapper>
          <Navbar />
          <Header />
          <SearchForm />
          </Wrapper>
        </div>
      </Router>
    )
  };
};

export default App;
