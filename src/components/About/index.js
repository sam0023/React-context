import { useContext } from "react";
import Navigate from "../Navigate";
import CounterContext from "../../context/CounterContext";

const About = () => {
  const { count, onIncrement, onDecrement } = useContext(CounterContext);

  const onRequestIncrement = () => {
    onIncrement();
  };
  const onRequestDecrement = () => {
    onDecrement();
  };
  return (
    <div>
      <h1>This is About Section</h1>
      <Navigate />
      <div>
        <h1>count:{count}</h1>
        <div>
          <button type="button" onClick={onRequestIncrement}>
            increase
          </button>
          <button type="button" onClick={onRequestDecrement}>
            decrease
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
