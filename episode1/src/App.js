import './App.css';
import {useState} from 'react';
function App() {
  const [count,setCount] = useState(0);

  const IncreaseCount = (event) => {
    setCount(count + 1)
  };

  const DecreaseCount = (event) => {
    setCount(count - 1)
  };

  const SetToZero = (event) => {
    setCount(0)
  };
  
  return(
    <div className='App'>
    <button onClick={IncreaseCount}>Increase</button>
    <button onClick={DecreaseCount}>Decrease</button>
    <button onClick={SetToZero}>SetZero</button>
    {count}

    </div>
  );
}
export default App;