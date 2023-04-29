import { Routes, Route } from "react-router-dom";
import React from "react";
import { Component } from "react";
import CounterContext from "./context/CounterContext";
import Home from "./components/Home";
import About from "./components/About";
import "./App.css";

class App extends Component {
  state = {
    count: 1,
  };

  onIncrement = () => {
    this.setState((prev) => ({ count: prev.count + 1 }));
  };

  onDecrement = () => {
    this.setState((prev) => ({ count: prev.count - 1 }));
  };

  render() {
    const { count } = this.state;
    return (
      <CounterContext.Provider
        value={{
          count,
          onIncrement: this.onIncrement,
          onDecrement: this.onDecrement,
        }}
      >
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </CounterContext.Provider>
    );
  }
}

export default App;
