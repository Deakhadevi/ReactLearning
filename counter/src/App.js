 
 
import './App.css';
import { useState } from 'react';
import DisplayBtn from './components/DisplayBtn';

function App() {
  const [mount,setMount]=useState(0);

  function handleMount(){
    setMount(1);

  }

  function handleUnMount(){
    setMount(0);

  }
  return (
      <div className="App">
      <div className='mount'>
      <button onClick={handleMount}>Mount</button>
      <button onClick={handleUnMount}>UnMount</button>
      { mount===1 && <DisplayBtn></DisplayBtn>}
      </div>
    
    </div>
  );
}

export default App;
 
