import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import Wrapper from "./components/Wrapper";

import "./App.css";

import Search from "./pages/search";

class App extends Component {
 
  render() {
    return (
     <Router>
        <div>
          <Wrapper>
          <Navbar />
          <Header />
          <Route exact="/" component={Search} />
          <Route exact="/search" component={Search} />
          </Wrapper>
        </div>
      </Router>
    )
  };
};

export default App;
