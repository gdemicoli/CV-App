import { useState } from 'react';

function InputDisplay() {
  const [input, setInput] = useState('');

  const changeText = (event) => {
    setInput(event.target.value);
  };

  return (
    <div>
      <input value={input} onChange={changeText} />
      <p>{input}</p>
    </div>
  );
}
export default InputDisplay;
