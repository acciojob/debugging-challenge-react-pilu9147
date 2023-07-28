import React, { useState } from "react";
import '../styles/App.css';

const App = () => {
  let [count, setCount] = useState(0);

  return (
    <div className="ball">
      <h1 onDoubleClick={() => { alert("cant edit it") }} className="count">{count}</h1>
      <button onClick={() => { setCount(count + 1) }} className="increment-button">Increment</button>
    </div>
  );
}

export default App;
