import Users from './components/Users/Users'
import './App.css';
import {useState} from 'react';

function App() {
  const [familiar, setFamiliar] = useState(false);
  return (
    <div className="App">
    <h2>Is Familiar:{familiar.toString()} </h2>
    <button onClick={()=> setFamiliar(!familiar)}>Toggle</button>
    <Users familiar={familiar}></Users>
    </div>
  );
}

export default App;
