import { useContext } from "react";
import { CountContext } from "./App";

export function ContextTest() {
  const { data, setData } = useContext(CountContext);
  return (
    <div>
      <p>{data}</p>
      <button
        onClick={() => {
          setData(data + 1);
        }}
      >
        +
      </button>
    </div>
  );
}
