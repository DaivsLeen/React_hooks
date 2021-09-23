import { useReducer } from "react";

const initialState = { count: 0 };

// The

export default function ReducerTest() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count:{state.count}
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </>
  );
}

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error("Wrong parameter");
  }
}
