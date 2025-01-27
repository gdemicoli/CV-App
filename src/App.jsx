import { useState } from 'react';
import InputDisplay from './inputDisplay';
import './App.css';

function App() {
  const [input, setInput] = useState('');

  const changeName = (name) => {
    setInput(name);
  };

  return (
    <div>
      <InputDisplay value={input} func={changeName} />
      <p>{input}</p>
    </div>
  );
}

export default App;
