import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";

import CounterContext from "./context/CounterContext";
import Home from "./components/Home";
import About from "./components/About";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(1);
  const onIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const onDecrement = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <CounterContext.Provider
      value={{
        count,
        onIncrement: onIncrement,
        onDecrement: onDecrement,
      }}
    >
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </CounterContext.Provider>
  );
};

export default App;
