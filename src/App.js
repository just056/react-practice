import React, {useState} from 'react';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <h1>{count}</h1>
        <h2>767676767</h2>
        <button onClick={() => setCount(count + 1)}>+1</button>
        <button onClick={() => setCount(count - 1)}>-1</button>
    </div>
  );
}

export default App;
