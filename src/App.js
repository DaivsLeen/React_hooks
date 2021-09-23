// import CallbackTest from "./CallbackTest";
// import EffectTest from "./EffectTest";
import { useState, createContext } from "react";
import { ContextParent } from "./ContextParent";

export const CountContext = createContext();

export default function App() {
  const [data, setData] = useState(0);

  return (
    <div className="App">
      <CountContext.Provider value={{ data: data, setData: setData }}>
        <ContextParent />
      </CountContext.Provider>
    </div>
  );
}
