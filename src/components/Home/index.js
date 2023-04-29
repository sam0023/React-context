import Navigate from "../Navigate";
import CounterContext from "../../context/CounterContext";

const Home = () => (
  <CounterContext.Consumer>
    {(value) => {
      const { count, onIncrement, onDecrement } = value;

      const onRequestIncrement = () => {
        onIncrement();
      };
      const onRequestDecrement = () => {
        onDecrement();
      };

      return (
        <div>
          <h1>This is Home Section</h1>
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
    }}
  </CounterContext.Consumer>
);

export default Home;
