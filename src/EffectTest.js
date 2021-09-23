import { useEffect, useState } from "react";

export default function EffectTest() {
  const [data, setData] = useState(0);
  const [name, setName] = useState("Lin");

  //只执行一次
  useEffect(() => {
    console.log("清除订阅");
  });

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
