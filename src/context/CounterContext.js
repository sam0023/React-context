import React from "react";

const CounterContext = React.createContext({
  count: 0,
  onIncrement: () => {},
  onDecrement: () => {},
});

export default CounterContext;
